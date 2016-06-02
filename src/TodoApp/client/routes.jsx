import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import TodoApp from './components/TodoApp';

FlowRouter.route('/', {
  action() {
    mount(TodoApp);
  }
});
