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


const LessonEditor = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default LessonEditor