from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import SQLAlchemyError
from ..models.mymodel import Course
import json


@view_config(route_name='courses', request_method='GET', renderer='json')
def get_courses(request):
    try:
        courses = request.dbsession.query(Course).all()
        return {
            'status': 'success',
            'data': [
                {
                    'id': course.id,
                    'kode_mk': course.kode_mk,
                    'nama_mk': course.nama_mk,
                    'sks': course.sks,
                    'semester': course.semester
                } for course in courses
            ]
        }
    except SQLAlchemyError:
        return Response(json.dumps({'status': 'error', 'message': 'Database error'}), status=500)


@view_config(route_name='course', request_method='GET', renderer='json')
def get_course(request):
    try:
        course_id = request.matchdict['id']
        course = request.dbsession.query(Course).filter_by(id=course_id).first()
        
        if course is None:
            return Response(json.dumps({'status': 'error', 'message': 'Course not found'}), status=404)
            
        return {
            'status': 'success',
            'data': {
                'id': course.id,
                'kode_mk': course.kode_mk,
                'nama_mk': course.nama_mk,
                'sks': course.sks,
                'semester': course.semester
            }
        }
    except SQLAlchemyError:
        return Response(json.dumps({'status': 'error', 'message': 'Database error'}), status=500)


@view_config(route_name='courses', request_method='POST', renderer='json')
def create_course(request):
    try:
        data = request.json_body
        course = Course(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=data['sks'],
            semester=data['semester']
        )
        request.dbsession.add(course)
        request.dbsession.flush()
        
        return {
            'status': 'success',
            'data': {
                'id': course.id,
                'kode_mk': course.kode_mk,
                'nama_mk': course.nama_mk,
                'sks': course.sks,
                'semester': course.semester
            }
        }
    except SQLAlchemyError:
        return Response(json.dumps({'status': 'error', 'message': 'Database error'}), status=500)


@view_config(route_name='course', request_method='PUT', renderer='json')
def update_course(request):
    try:
        course_id = request.matchdict['id']
        course = request.dbsession.query(Course).filter_by(id=course_id).first()
        
        if course is None:
            return Response(json.dumps({'status': 'error', 'message': 'Course not found'}), status=404)
            
        data = request.json_body
        course.kode_mk = data.get('kode_mk', course.kode_mk)
        course.nama_mk = data.get('nama_mk', course.nama_mk)
        course.sks = data.get('sks', course.sks)
        course.semester = data.get('semester', course.semester)
        
        return {
            'status': 'success',
            'data': {
                'id': course.id,
                'kode_mk': course.kode_mk,
                'nama_mk': course.nama_mk,
                'sks': course.sks,
                'semester': course.semester
            }
        }
    except SQLAlchemyError:
        return Response(json.dumps({'status': 'error', 'message': 'Database error'}), status=500)


@view_config(route_name='course', request_method='DELETE', renderer='json')
def delete_course(request):
    try:
        course_id = request.matchdict['id']
        course = request.dbsession.query(Course).filter_by(id=course_id).first()
        
        if course is None:
            return Response(json.dumps({'status': 'error', 'message': 'Course not found'}), status=404)
            
        request.dbsession.delete(course)
        return {'status': 'success', 'message': 'Course deleted successfully'}
    except SQLAlchemyError:
        return Response(json.dumps({'status': 'error', 'message': 'Database error'}), status=500) 