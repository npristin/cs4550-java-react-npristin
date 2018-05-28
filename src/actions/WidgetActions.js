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

export const listTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.LIST_TEXT_CHANGED,
    id: widgetId,
    list_items: newText
  })
)

export const listTypeChanged = (dispatch, widgetId, newType) => (
  dispatch({
    type: constants.LIST_TYPE_CHANGED,
    id: widgetId,
    list_type: newType
  })
)

export const imageTextChanged = (dispatch, widgetId, newSrc) => (
  dispatch({
    type: constants.IMAGE_SRC_CHANGED,
    id: widgetId,
    src: newSrc
  })
)

export const linkHrefChanged = (dispatch, widgetId, newHref) => (
  dispatch({
    type: constants.LINK_HREF_CHANGED,
    id: widgetId,
    href: newHref
  })
)

export const linkNameChanged = (dispatch, widgetId, newName) => (
  dispatch({
    type: constants.LINK_NAME_CHANGED,
    id: widgetId,
    text: newName
  })
)

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
  dispatch({
    type: constants.PARAGRAPH_TEXT_CHANGED,
    id: widgetId,
    text: newText
  })
)

export const findAllWidgets = dispatch => {
  fetch('http://localhost:8080/api/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      widgets: widgets }))
}
export const addWidget = (dispatch, lessonId) => (
  dispatch({type: constants.ADD_WIDGET, lessonId: lessonId})
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
