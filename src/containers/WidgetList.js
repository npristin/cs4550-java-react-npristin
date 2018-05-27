import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions/WidgetActions"
import WidgetContainer from '../components/Widget'

class WidgetList extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.lessonId)

    this.props.findAllWidgets()

  }
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  previewMode: state.preview
})
const dispatcherToPropsMapper
  = dispatch => ({
  findAllWidgets: () => actions.findAllWidgets(dispatch),
  addWidget: () => actions.addWidget(dispatch),
  save: (lessonId, widgets) => actions.save(dispatch, lessonId, widgets),
  findAllWidgetsForLesson: (lessonId) => actions.findAllWidgetsForLesson(dispatch, lessonId),
  preview: () => actions.preview(dispatch)
})
const LessonEditor = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default LessonEditor