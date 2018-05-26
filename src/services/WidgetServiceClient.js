const WIDGET_API_URL =
  'http://localhost:8080/api/widget';
const WIDGET_LID_API_URL =
  'http://localhost:8080/api/lesson/LID/widget'

let _singleton = Symbol();
export default class WidgetServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Cannot instantiate directly.');
  }

  static get instance() {
    if(!this[_singleton])
      this[_singleton] = new WidgetServiceClient(_singleton);
    return this[_singleton]
  }

  createWidget(lessonId, widget) {
    return fetch(WIDGET_LID_API_URL
        .replace('LID', lessonId), {
          body: JSON.stringify(widget),
          headers: { 'Content-Type': 'application/json' },
          method: 'POST'
        }).then(function (response)
      { return response.json(); })
  }
}