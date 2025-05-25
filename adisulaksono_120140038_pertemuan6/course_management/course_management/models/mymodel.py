from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
)

from .meta import Base


class Course(Base):
    __tablename__ = 'courses'
    id = Column(Integer, primary_key=True)
    kode_mk = Column(Text, unique=True, nullable=False)
    nama_mk = Column(Text, nullable=False)
    sks = Column(Integer, nullable=False)
    semester = Column(Integer, nullable=False)


Index('course_kode_mk_index', Course.kode_mk, unique=True)
