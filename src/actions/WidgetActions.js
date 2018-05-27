import * as constants from "../constants/WidgetConstants"

export const headingTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.HEADING_TEXT_CHANGED,
    id: widgetId,
    text: newText})
)
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
  dispatch({
    type: constants.HEADING_SIZE_CHANGED,
    id: widgetId,
    size: newSize})
)

export const findAllWidgets = dispatch => {
  fetch('http://localhost:8080/api/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      widgets: widgets }))
}
export const addWidget = dispatch => (
  dispatch({type: constants.ADD_WIDGET})
)
export const save = (dispatch, lessonId, widgets) => (
  dispatch({type: constants.SAVE, lessonId: lessonId, widgets: widgets})
)
export const preview = dispatch => (
  dispatch({type: constants.PREVIEW})
)

export const setLessonId = (dispatch, lessonId) => (
  dispatch({type: constants.SET_LESSON_ID})
)

export const findAllWidgetsForLesson = (dispatch, lessonId) => {
  fetch('http://localhost:8080/api/lesson/LID/widget'
    .replace('LID', lessonId))
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS_FOR_LID,
      widgets: widgets,
      lessonId: lessonId}))
}