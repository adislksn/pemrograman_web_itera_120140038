from sqlalchemy import engine_from_config
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import configure_mappers
import zope.sqlalchemy

# Import or define all models here to ensure they are attached to the
# Base.metadata before being imported by Alembic
from .meta import Base  # noqa
from .mymodel import Course  # noqa

# Run configure_mappers after defining all of the models to ensure
# all relationships can be setup
configure_mappers()


def get_engine(settings, prefix='sqlalchemy.'):
    return engine_from_config(settings, prefix)


def get_session_factory(engine):
    factory = sessionmaker()
    factory.configure(bind=engine)
    return factory


def get_tm_session(session_factory, transaction_manager):
    """
    Get a ``sqlalchemy.orm.Session`` instance backed by a transaction.

    This function will hook the session to the transaction manager which
    will take care of committing any changes.

    - When using pyramid_tm it will automatically be committed or aborted
      depending on whether an exception is raised.

    - When using scripts you'll need to explicitly call the transaction
      manager's commit() or abort() methods.

    This function may be invoked with a ``request`` kwarg, such as when invoked
    by the reified ``.db`` property which is attached to the request by the
    ``pyramid_tm`` package, or when using a ``request_method`` which is wrapped
    by the ``pyramid_tm`` package.  The default value, for backwards
    compatibility, is ``False``.

    The ``request`` kwarg is used to populate the ``sqlalchemy.orm.Session``'s
    "info" dict.  The "info" dict is the official namespace for developers to
    stash session-specific information.  For more information, please see the
    SQLAlchemy docs:
    https://docs.sqlalchemy.org/en/stable/orm/session_api.html#sqlalchemy.orm.session.Session.params.info

    By placing the active ``request`` in the "info" dict, developers will be
    able to access the active Pyramid request from an instance of an SQLAlchemy
    ORM object in one of two ways:

    - Classic SQLAlchemy. This will always work, but will be a bit slow:
        ```
        from pyramid.threadlocal import get_current_request

        def mymodel_method(self):
            request = get_current_request()
        ```

    - Modern SQLAlchemy. This will emit a warning, but won't break anything:
        ```
        def mymodel_method(self):
            request = self.info["request"]
        ```

    """
    dbsession = session_factory(info={"request": None})
    zope.sqlalchemy.register(
        dbsession, transaction_manager=transaction_manager
    )
    return dbsession


def includeme(config):
    """
    Initialize the model for a Pyramid app.

    Activate this setup using ``config.include('course_management.models')``.

    """
    settings = config.get_settings()
    settings['tm.manager_hook'] = 'pyramid_tm.explicit_manager'

    # use pyramid_tm to hook the transaction lifecycle to the request
    config.include('pyramid_tm')

    # use pyramid_retry to retry a request when transient exceptions occur
    config.include('pyramid_retry')

    session_factory = get_session_factory(get_engine(settings))
    config.registry['dbsession_factory'] = session_factory

    # make request.dbsession available for use in Pyramid
    config.add_request_method(
        # r.tm is the transaction manager used by pyramid_tm
        lambda r: get_tm_session(session_factory, r.tm),
        'dbsession',
        reify=True
    )
