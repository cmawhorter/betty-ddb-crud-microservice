# betty-ddb-crud-microservice
A demo of an AWS Lambda service that performs CRUD on a DynamoDB table.  Using [betty](https://github.com/cmawhorter/betty) for build/deploying.

This demo is based on a microservice skeleton we've built for [Stampr](https://github.com/stampr).

[![Video of this README in action](http://img.youtube.com/vi/kFeWzsVAsKg/0.jpg)](http://www.youtube.com/watch?v=kFeWzsVAsKg "Deploying a simple DynamoDB CRUD service to AWS Lambda with betty")

## Getting started

1. Create an AWS CLI profile described [here](http://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html)
1. Open terminal and run `export AWS_PROFILE=__YOUR_PROFILE_NAME_CREATED_ABOVE__; export AWS_REGION=__WHATEVER_REGION__`
1. `npm i`
1. `node ./provision/create-table.js`

Finally, run `./betty deploy`.  This is a shortcut to running `./betty build && ./betty update`.

Betty will create the AWS Lambda function along with the necessary IAM policies/permissions, and upload the function with the latest build.

To test the function, open the AWS console and go to Lambda and invoke using the test button. 

## Debugging

### Locally

You can run your lambda function locally through lambda emulator bundled with betty, but that's not described here.

### Remote

Running `./betty logs` will stream the CloudWatch logs for the lambda function to the console using bunyan and if your microservice also uses bunyan for logging, it will work how you expect.

### Troubleshooting

If you get errors running in AWS Lambda that you can't troubleshoot, try running the function locally `node ./dist/index.js`.  

These problems are often related to missing dependencies or other errors that only surface after build.

## CRUD

Crud events that can be used in the AWS console as lambda test events.

### Create

```json
{
  "method": "create",
  "body": {
      "email": "foo@example.com", 
      "name": "Foo Bar", 
      "age": 21
  }
}
```

### Read

```json
{
  "method": "read",
  "body": {
      "email": "foo@example.com"
  }
}
```

### Update

```json
{
  "method": "update",
  "body": {
      "email": "foo@example.com",
      "age": 22
  }
}
```

### Delete

***NOTE***  Delete will not work as-is because the permission has not been granted to the microservice.  To allow delete, you must add the `dynamodb:DeleteItem` permission in `resource.js`.

```json
{
  "method": "delete",
  "body": {
      "email": "foo@example.com"
  }
}
```
