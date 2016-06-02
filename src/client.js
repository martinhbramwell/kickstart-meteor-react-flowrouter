import { FlowRouter } from 'meteor/kadira:flow-router';

import 'TodoApp/client';

Meteor.startup(function() {
  FlowRouter.initialize();
});
