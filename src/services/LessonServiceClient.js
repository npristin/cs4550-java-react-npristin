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

}
