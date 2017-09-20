module.exports = {
  "name":               "betty-ddb-demo",
  "description":        "A demo of an AWS Lambda service that performs CRUD on a DynomoDB table",
  "repository": {
    "type":             "git",
    "url":              "git://github.com/cmawhorter/betty-ddb-crud-microservice"
  },
  "author": {
    "name":             "Cory Mawhorter",
    "email":            "cory.mawhorter@gmail.com",
    "url":              "http://www.mawhorter.net/"
  },
  // AWS Lambda function settings
  "configuration": {
    "memory":           256,
    "timeout":          20,
    "source":           "src/main.js",
    "main":             "dist/index.js",
    "entry":            "index.handler",
    "environment":      require(`./env-${global.betty.env}.json`)
  },
  // The assets/permissions this microservice requires directly.  If this microservice requires
  // access to other microservices, they should be placed in resources below -- not here.
  // "assets" are owned by this microservice.  Not shared with another.
  "assets": [
    {
      "service":        "dynamodb",
      "name":           "table/betty-ddb-demo-accounts",
      "permissions":    [
                          "dynamodb:BatchGetItem",
                          "dynamodb:BatchWriteItem",
                          "dynamodb:GetItem",
                          "dynamodb:PutItem",
                          "dynamodb:Query",
                          // Uncomment this to allow this service to delete data
                          // "dynamodb:DeleteItem",
                          "dynamodb:UpdateItem"
                        ]
    },
    {
      "service":        "dynamodb",
      "name":           "table/betty-ddb-demo-accounts/*",
      "permissions":    [ "dynamodb:BatchGetItem", "dynamodb:BatchWriteItem", "dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:Query", "dynamodb:UpdateItem" ]
    }
  ],
  // This is the IAM policy downstream microservices will assume when adding
  // this microservice as a resource.  (See resource below)
  "policy": [
    {
      "service":        "lambda",
      "region":         "*",
      "name":           "function:betty-ddb-demo",
      "permissions":    [ "lambda:InvokeFunction" ]
    }
  ]
  // This attaches the resource microservice's policy to this function; allowing this microservice to have
  // the permissions defined.
  // This is mainly used to allow one microservice to invoke another directly, but could be used to provide,
  // shared access to resources such as an S3 bucket.
  // "resources": {
  //   "some-other-microservice": "*"
  // }
}
