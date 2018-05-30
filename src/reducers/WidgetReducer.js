import * as constants from "../constants/WidgetConstants"

export const WidgetReducer = (state = {widgets: [], preview: false, lessonId: ''}, action) => {
  let newState
  switch (action.type) {

    case constants.PREVIEW:
      return {
        widgets: state.widgets,
        preview: !state.preview
      }

    case constants.HEADING_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.text = action.text
          }
          return Object.assign({}, widget)
        })
      }

    case constants.HEADING_SIZE_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.size = action.size
          }
          return Object.assign({}, widget)
        })
      }

    case constants.LIST_TEXT_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            widget.listItems = action.list_items
          }
          return Object.assign({}, widget)
        })
      }

    case constants.LIST_TYPE_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
          if(widget.id === action.id) {
            console.log(action.list_type)
            widget.listType = action.list_type
          }
          return Object.assign({}, widget)
        })
      }

    case constants.IMAGE_SRC_CHANGED:
      return {
        widgets: state.widgets.map(widget => {
        if(widget.id === action.id) {
          widget.src = action.src
        }
        return Object.assign({}, widget)
        })
      }

    case constants.LINK_HREF_CHANGED:
      return {
       widgets: state.widgets.map(widget => {
       if(widget.id === action.id) {
         widget.href = action.href
       }
       return Object.assign({}, widget)
       })
     }

    case constants.LINK_NAME_CHANGED:
      return {
       widgets: state.widgets.map(widget => {
       if(widget.id === action.id) {
         widget.text = action.text
       }
       return Object.assign({}, widget)
       })
     }

    case constants.PARAGRAPH_TEXT_CHANGED:
      return {
       widgets: state.widgets.map(widget => {
       if(widget.id === action.id) {
         widget.text = action.text
       }
       return Object.assign({}, widget)
       })
     }

    case constants.SELECT_WIDGET_TYPE:
      console.log(action);
      let newState = {
        widgets: state.widgets.filter((widget) => {
          if(widget.id === action.id) {
            widget.className = action.widgetType
          }
          return true;
        })
      }
      return JSON.parse(JSON.stringify(newState))

    case constants.SAVE:
      fetch('https://cs4550-java-server-npristin.herokuapp.com/api/lesson/LID/widget/save'
        .replace('LID', action.lessonId), {
        method: 'post',
        credentials: 'same-origin',
        body: JSON.stringify(state.widgets),
        headers: {
          'content-type': 'application/json'}
      })
      return state

    case constants.FIND_ALL_WIDGETS:
      newState = Object.assign({}, state)
      newState.widgets = action.widgets
      return newState

    case constants.DELETE_WIDGET:
      fetch('https://cs4550-java-server-npristin.herokuapp.com/api/widget/' + action.id,
       {
        method: 'delete',
        credentials: 'same-origin',
       })
      return {
        widgets: state.widgets.filter(widget => (
          widget.id !== action.id
        ))
      }

    case constants.ADD_WIDGET:
      newState = Object.assign({}, state)
      newState.widgets = [
          ...state.widgets,
          {
            id: Math.max.apply(Math, state.widgets.map(widget => widget.id)) + 10,
            className: 'Heading',
            size: '1',
            lessonId: action.lessonId
          }
        ]
      console.log(newState)
      return newState

    case constants.FIND_ALL_WIDGETS_FOR_LID:
      newState = Object.assign({}, state)
      newState.lessonId = action.lessonId
      newState.widgets = action.widgets
      return newState

    case constants.SET_LESSON_ID:
      newState = Object.assign({}, state)
      newState.lessonId = action.lessonId
      return newState

    case constants.INCREMENT_ORDER:
      newState = Object.assign({}, state)

      fetch('https://cs4550-java-server-npristin.herokuapp.com/api/lesson/LID/widget/WID/order/increment'
        .replace('WID', action.widgetId)
        .replace('LID', action.lessonId), {
        method: 'post',
        credentials: 'same-origin',
        body: JSON.stringify(state.widgets),
        headers: {
          'content-type': 'application/json'}
      }).then(response => (response.json()))
        .then(widgets => newState.widgets = widgets)

      return newState

    case constants.DECREMENT_ORDER:
      newState = Object.assign({}, state)

      fetch('https://cs4550-java-server-npristin.herokuapp.com/api/lesson/LID/widget/WID/order/decrement'
        .replace('WID', action.widgetId)
        .replace('LID', action.lessonId), {
        method: 'post',
        credentials: 'same-origin',
        body: JSON.stringify(state.widgets),
        headers: {
          'content-type': 'application/json'}
      }).then(response => (response.json()))
        .then(widgets => newState.widgets = widgets)

      return newState

    default:
      return state
  }
}