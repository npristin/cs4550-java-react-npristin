import * as constants from "../constants/WidgetConstants"

export const WidgetReducer = (state = {widgets: [], preview: false, lessonId: ''}, action) => {
  let newState
  switch (action.type) {

    case constants.PREVIEW:
      return {
        widgets: state.widgets,
        preview: !state.preview
      }

    default:
      return state
  }
}