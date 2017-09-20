'use strict';

// uncomment to create locally
// process.env.LOCAL_DYNDB_ENDPOINT  = 'http://localhost:8000/'
// process.env.LOCAL_DYNDB_REGION    = 'us-east-1';

if (!process.env.AWS_PROFILE && !process.env.LOCAL_DYNDB_ENDPOINT) throw new Error('AWS_PROFILE is required if not targeting dynamodb local');
if (!process.env.AWS_REGION && !process.env.LOCAL_DYNDB_ENDPOINT) throw new Error('AWS_REGION is required if not targeting dynamodb local');

require('reify');
const Data = require('../src/lib/data.js').client;

console.log('Creating model tables...');

function errorExit(err) {
  console.log(err.stack || err);
  process.exit(1);
}

Data.createTables(function(err) {
  if (err) return errorExit(err);
  console.log('done');
});
