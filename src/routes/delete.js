import { Account } from '../lib/data.js';

export default function(event, context, callback) {
  Account.destroy(event.body, callback);
}
