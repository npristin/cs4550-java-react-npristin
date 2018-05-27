import * as constants from "../constants/WidgetConstants"



export const findAllWidgets = dispatch => {
  fetch('http://localhost:8080/api/widget')
    .then(response => (response.json()))
    .then(widgets => dispatch({
      type: constants.FIND_ALL_WIDGETS,
      widgets: widgets }))
}