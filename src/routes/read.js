import { Account } from '../lib/data.js';

export default function(event, context, callback) {
  Account.get(event.body, callback);
}
