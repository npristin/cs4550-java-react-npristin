import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseList from './CourseList';
import '../styles/CourseCard.css';
import CourseEditor from './CourseEditor';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class CourseManager extends React.Component {
 render() {
   return (
     <Router>
         <div>
           <Route path="/courses"
                  component={CourseList}>
           </Route>
           <Route path="/course/:courseId"
                  component={CourseEditor}>
           </Route>
           <Route path="/course/:courseId/module/:moduleId"
                  component={ModuleEditor}>
           </Route>
         </div>
       </Router>
     )
   }
}
