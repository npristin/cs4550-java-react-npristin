const LESSON_API_URL =
  'http://localhost:8080/api/lesson';
const LESSON_CID_MID_API_URL =
  'http://localhost:8080/api/course/CID/module/MID/lesson';

let _singleton = Symbol();
export default class LessonServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Cannot instantiate directly.');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new LessonServiceClient(_singleton);
    return this[_singleton]
  }

  findAllLessons() {
     return fetch(LESSON_API_URL)
         .then(function(response){
             return response.json();
         });
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(
      LESSON_CID_MID_API_URL
        .replace('CID', courseId)
        .replace('MID', moduleId))
      .then(function (response) {
        return response.json();
      })
  }

  createLesson(courseId, moduleId, lesson) {
    return fetch(LESSON_CID_MID_API_URL
        .replace('CID', courseId)
        .replace('MID', moduleId),
      {
        body: JSON.stringify(lesson),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }).then(function (response)
    { return response.json(); })
  }

  deleteLesson(lessonId) {
    return fetch(LESSON_API_URL + '/' + lessonId,
       {
           method: 'DELETE'
       });
  }

}
