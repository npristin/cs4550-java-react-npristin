import React, {Component} from 'react';
import ModuleListItem from './ModuleListItem';
import ModuleServiceClient from '../services/ModuleServiceClient'
import ModuleEditor from './ModuleEditor'

export default class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseId: '',
      module: { title: '' },
      modules: []
    };
    this.createModule = this.createModule.bind(this);
    this.titleChanged = this.titleChanged.bind(this);
    this.deleteModule = this.deleteModule.bind(this);

    this.setCourseId =
      this.setCourseId.bind(this);

    this.moduleServiceClient = ModuleServiceClient.instance;
  }
  setModules(modules) {
    this.setState({modules: modules})
  }
  findAllModulesForCourse(courseId) {
    this.moduleServiceClient
      .findAllModulesForCourse(courseId)
      .then((modules) => {this.setModules(modules)});
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }
  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }
  componentWillReceiveProps(newProps){
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId)
  }

  createModule() {
    console.log(this.state.module);
    this.moduleServiceClient
      .createModule(this.props.courseId, this.state.module);
  }
}
