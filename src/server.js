import 'TodoApp/server';

const Tasks = require('TodoApp/collections/Tasks');

import { Meteor } from 'meteor/meteor';

var Api = new Restivus({
  useDefaultAuth: true,
  prettyJson: true
});

Api.addCollection(Meteor.users);
Api.addCollection(Tasks);

Api.addRoute('cleardb', {
  get: {
    action: function () {
      console.log(" removing users ");
      Meteor.users.remove({});
      console.log(" removing tasks ");
      Tasks.remove({});
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'text/html'
        },
        body: '<html><body>Database wiped.<a href="/">Return to Todos</a></body></html>'
      };
    }
  }
});
