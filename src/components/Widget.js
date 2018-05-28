import React from  'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET, INCREMENT_ORDER} from "../constants/WidgetConstants"
import * as actions from '../actions/WidgetActions'
import '../styles/Widget.css';

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged}) => {
  let selectElem
  let inputElem
  return(
    <div>
      <div hidden={preview}>
        <h2> Heading Widget </h2>
          <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node}/>
          <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                  value={widget.size}
                  ref={node => selectElem = node}>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>
          <h3>Preview</h3>
      </div>
      {widget.size == 1 && <h1>{widget.text}</h1>}
      {widget.size == 2 && <h2>{widget.text}</h2>}
      {widget.size == 3 && <h3>{widget.text}</h3>}
    </div>
  )
}

const List = ({widget, preview, listTextChanged, listTypeChanged}) => {
  let selectElem
  let inputElem

  return(
  <div>
    <div hidden={preview}>
      <h2> List Widget </h2>
        <li>
        <select onChange={() => listTypeChanged(widget.id, selectElem.value)}
                value={widget.list_type}
                ref={node => selectElem = node}>
          <option value="Unordered List">Unordered List</option>
          <option value="Ordered List">Ordered List</option>
        </select>
        <input onChange={() => listTextChanged(widget.id, inputElem.value)}
               value={widget.list_items}
               ref={node => inputElem = node}/> </li>

        <h3>Preview</h3>
    </div>
    {<li>{widget.text}</li>}
  </div>
  )
}

const Image = ({widget, preview, imageTextChanged}) => {
  let inputElem

  return(
    <div>
      <div hidden={preview}>
        <h2> Image Widget </h2>
          <input onChange={() => imageTextChanged(widget.id, inputElem.value)}
                 value={widget.src}
                 ref={node => inputElem = node}/>
          <h3>Preview</h3>
      </div>
        <img src={widget.src}/>
    </div>
  )
}

const Link = ({widget, preview, linkTextChanged}) => {
  let inputElem

  return(
    <div>
      <div hidden={preview}>
        <h2> Link Widget </h2>
          <input onChange={() => linkTextChanged(widget.id, inputElem.value)}
                 value={widget.href}
                 ref={node => inputElem = node}/>
          <h3>Preview</h3>
      </div>
        <a href={widget.href}/>
    </div>
  )
}

const Paragraph = ({widget, preview, paragraphTextChanged}) => {
  let inputElem

  return(
    <div>
      <div hidden={preview}>
        <h2>Paragraph Widget</h2>
          <input onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                 value={widget.text}
                 ref={node => inputElem = node}/>
          <h3>Preview</h3>
      </div>
        <p>{widget.text}</p>
    </div>
  )
}

const dispathToPropsMapper = dispatch => ({
  headingTextChanged: (widgetId, newText) =>

    actions.headingTextChanged(dispatch, widgetId, newText),
  headingSizeChanged: (widgetId, newSize) =>
    actions.headingSizeChanged(dispatch, widgetId, newSize),
  listTextChanged: (widgetId, newText) =>
    actions.listTextChanged(dispatch, widgetId, newText),
  listTypeChanged: (widgetId, newType) =>
    actions.listTypeChanged(dispatch, widgetId, newType),
  imageTextChanged: (widgetId, newSrc) =>
    actions.imageTextChanged(dispatch, widgetId, newSrc),
  linkTextChanged: (widgetId, newHref) =>
    actions.imageTextChanged(dispatch, widgetId, newHref),
  paragraphTextChanged: (widgetId, newText) =>
    actions.paragraphTextChanged(dispatch, widgetId. newText)
})
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
    <div>
      <div hidden={preview}>
      <select value={widget.className}
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

      <i className="fa fa-chevron-up" onClick={e => (
        dispatch({type: INCREMENT_ORDER, id: widget.id})
      )}></i>
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
    </div>
  )
}
const WidgetContainer = connect(state => ({
  preview: state.preview
}))(Widget)
export default WidgetContainer