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

  render() {
    return(
      <div>
        <h1>Widget List {this.props.widgets.length}</h1>

        <button hidden={this.props.previewMode} onClick={() => {this.props.save(this.props.lessonId, this.props.widgets)}}>
          Save
        </button>
        <button onClick={this.props.preview}>
          Preview
        </button>
        <div>
          {this.props.lessonId}
        </div>

        <ul>
          {this.props.widgets.filter(w => w.lessonId == this.props.lessonId)
            .map(widget => (
            <WidgetContainer widget={widget}
                             preview={this.props.previewMode}
                             key={widget.id}/>
          ))}
        </ul>
        <button onClick={this.props.addWidget}>Add widget
        </button>
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
  addWidget: () => actions.addWidget(dispatch),
  save: (lessonId, widgets) => actions.save(dispatch, lessonId, widgets),
  findAllWidgetsForLesson: (lessonId) => actions.findAllWidgetsForLesson(dispatch, lessonId),
  preview: () => actions.preview(dispatch)
})
const LessonEditor = connect(
  stateToPropertiesMapper,
  dispatcherToPropsMapper)(WidgetList)

export default LessonEditor