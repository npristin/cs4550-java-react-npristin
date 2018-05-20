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
}
