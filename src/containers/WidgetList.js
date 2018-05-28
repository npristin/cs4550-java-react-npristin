import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions/WidgetActions"
import WidgetContainer from '../components/Widget'
import '../styles/WidgetList.css';

class WidgetList extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.lessonId)

    this.props.findAllWidgets()
  }

  render() {
    return(
      <div>
        <h1>Widgets</h1>
        <button className="btn btn-primary save-button"
          hidden={this.props.previewMode} onClick={() => {this.props.save(this.props.lessonId, this.props.widgets)}}>
          Save
        </button>
        <button className="btn btn-primary preview-button" onClick={this.props.preview}>
          Preview
        </button>
        <ul>
          {this.props.widgets.filter(w => w.lessonId == this.props.lessonId)
            .map(widget => (
            <div>
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}/>
            <hr />
            </div>
          ))}
        </ul>
        <i className="fa fa-plus-square" onClick={() => {this.props.addWidget(this.props.lessonId)}}></i>
      </div>
    )
  }
}

const stateToPropertiesMapper = (state) => ({
  widgets: state.widgets,
  previewMode: state.preview
})
const dispatcherToPropsMapper
  = dispatch => ({
  findAllWidgets: () => actions.findAllWidgets(dispatch),
  addWidget: (lessonId) => actions.addWidget(dispatch, lessonId),
  save: (lessonId, widgets) => actions.save(dispatch, lessonId, widgets),
  findAllWidgetsForLesson: (lessonId) => actions.findAllWidgetsForLesson(dispatch, lessonId),
  preview: () => actions.preview(dispatch)
})
const LessonEditor = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default LessonEditor