const COURSE_API_URL =
    'https://cs4550-java-server-npristin.herokuapp.com/api/course';

let _singleton = Symbol();
class CourseServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Cannot instantiate directly.');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new CourseServiceClient(_singleton);
    return this[_singleton]
  }

  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(function(response){
        return response.json();
      });
  }

  createCourse(course) {
    return fetch(COURSE_API_URL, {
      body: JSON.stringify(course),
      headers: {
         'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function (response) {
      return response.json();
    })
  }

  deleteCourse(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId,
    {
      method: 'DELETE'
    });
  }

  findCourseById(courseId) {
    return fetch(COURSE_API_URL + '/' + courseId)
      .then(function (response) {
        return response.json();
    });
  }

  updateCourse(courseId, course) {
    fetch(COURSE_API_URL + '/' + courseId, {
      method: 'put',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}

export default CourseServiceClient;
