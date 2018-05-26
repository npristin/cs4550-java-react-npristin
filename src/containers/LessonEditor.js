import React from 'react'

class LessonEditor extends React.Component {
  constructor(props) {
    super(props)
  }

   render() {
    return (
      <div>
        <h1> {this.props.lessonId} </h1>
      </div>
    )
  }
}
export default LessonEditor;
