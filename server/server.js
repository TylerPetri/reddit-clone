require('dotenv').config();

const express = require('express');
const { join } = require('path');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const awsConfig = {
  region: 'us-east-2',
};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();

const PORT = process.env.PORT || 3001;

const { json, urlencoded } = express;

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'public')));

app.use(function (req, res, next) {
  const token = req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
      if (err) {
        return next();
      }
      dynamodb.query(
        {
          TableName: 'Reddit-Clone-Users',
          ProjectionExpression: '#un, #id',
          KeyConditionExpression: '#id = :id',
          ExpressionAttributeNames: {
            '#id': 'id',
            '#un': 'User',
          },
          ExpressionAttributeValues: {
            ':id': decoded.id,
          },
          ScanIndexForward: false,
        },
        (data) => {
          req.user = data.user;
          return next();
        }
      );
    });
  } else {
    return next();
  }
});

// require api routes here after I create them
app.use('/auth', require('./routes/auth/index'));
// app.use('/api', require('./routes/api/index'));

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
