import 'source-map-support/register';

import createAction from './routes/create.js';
import readAction from './routes/read.js';
import updateAction from './routes/update.js';
import deleteAction from './routes/delete.js';
import helloAction from './routes/hello.js';

// Structure of event is { method: 'route', body: ... }
const handler = (event, context, callback) => {
  console.log({ event, context });
  switch (event.method) {
    case 'create':
      return createAction(event, context, callback);
    case 'read':
      return readAction(event, context, callback);
    case 'update':
      return updateAction(event, context, callback);
    case 'delete':
      return deleteAction(event, context, callback);
    default:
      return helloAction(event, context, callback);
  }
};

export default { handler };
