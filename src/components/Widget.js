import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/WidgetConstants"
import * as actions from '../actions/WidgetActions'
import '../styles/Widget.css';



const stateToPropsMapper = state => ({
  preview: state.preview
})
const HeadingContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Heading)
const ListContainer = connect(stateToPropsMapper, dispathToPropsMapper)(List)
const ImageContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Image)
const LinkContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Link)
const ParagraphContainer = connect(stateToPropsMapper, dispathToPropsMapper)(Paragraph)

const Widget = ({widget, preview, dispatch}) => {
  let selectElement
  return(
    <li>
      <div hidden={preview}>
      {widget.text} {widget.widgetType}

      <select value={widget.widgetType}
              onChange={e =>
          dispatch({
            type: 'SELECT_WIDGET_TYPE',
            id: widget.id,
            widgetType: selectElement.value
          })} ref={node => selectElement = node}>
        <option>Heading</option>
        <option>Paragraph</option>
        <option>List</option>
        <option>Image</option>
        <option>Link</option>
      </select>

      <i className="fa fa-chevron-up"></i>
      <i className="fa fa-chevron-down"></i>
      <i className="fa fa-times fa-2x deleteWidget" onClick={e => (
        dispatch({type: DELETE_WIDGET, id: widget.id})
      )}></i>
      </div>
      <div>
        {widget.className==='Heading' && <HeadingContainer widget={widget}/>}
        {widget.className==='Paragraph' && <ParagraphContainer widget={widget}/>}
        {widget.className==='List' && <ListContainer widget={widget}/>}
        {widget.className==='Image' && <ImageContainer widget={widget}/>}
        {widget.className==='Link' && <LinkContainer widget={widget}/>}
      </div>
    </li>
  )
}
const WidgetContainer = connect(state => ({
  preview: state.preview
}))(Widget)
export default WidgetContainer