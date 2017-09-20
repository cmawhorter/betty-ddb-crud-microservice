const APP_ENV = process.env.APP_ENV;

export default function(event, context, callback) {
  return callback(null, { hello: 'world', time: Date.now(), env: APP_ENV });
}
