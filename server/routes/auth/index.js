const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');
const { AppConfigData } = require('aws-sdk');
const awsConfig = {
  region: 'us-east-2',
};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'Reddit-Clone-Users';

router.get('/users', (req, res) => {
  const params = {
    TableName: TABLE_NAME,
  };
  dynamodb.scan(params, (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data.Items);
    }
  });
});

router.post('/email', (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email required' });
    }

    dynamodb.scan(
      {
        TableName: TABLE_NAME,
        FilterExpression: 'email = :email',
        ExpressionAttributeValues: { ':email': email },
      },
      (err, data) => {
        if (err) {
          console.error('Unable to scan. Error:', JSON.stringify(err, null, 2));
          res.status(500).json(err);
        } else if (data.Count > 0) {
          res.status(401).json({ error: 'Email already exists' });
        } else {
          res.json({
            email,
          });
        }
      }
    );
  } catch (error) {
    return res.status(401).json({ error: 'Something went wrong' });
  }
});

router.post('/register', async (req, res, next) => {
  try {
    // expects {username, email, password} in req.body
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: 'Username, password, and email required' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: 'Password must be at least 6 characters' });
    }

    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: uuidv4(),
        username: username,
        createdAt: Date.now(),
        email: email,
        password: password,
      },
    };

    dynamodb.query(
      {
        TableName: TABLE_NAME,
        ProjectionExpression: '#un',
        KeyConditionExpression: '#un = :user',
        ExpressionAttributeNames: {
          '#un': 'username',
        },
        ExpressionAttributeValues: {
          ':user': username,
        },
      },
      (err, data) => {
        if (err) {
          console.error(
            'Unable to query. Error:',
            JSON.stringify(err, null, 2)
          );
          res.status(500).json(err);
        } else if (data.Count > 0) {
          res.status(401).json({ error: 'User already exists' });
        } else {
          dynamodb.put(params, (err, data) => {
            if (err) {
              console.error(
                'Unable to add item. Error JSON:',
                JSON.stringify(err, null, 2)
              );
              res.status(500).json(err);
            } else {
              console.log('Added item:', username);
              const token = jwt.sign(
                { id: data._id },
                process.env.SESSION_SECRET,
                {
                  expiresIn: 86400,
                }
              );
              const user = { username: username };
              res.json({ user, token });
            }
          });
        }
      }
    );
  } catch (error) {
    return res.status(401).json({ error: 'Something went wrong' });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    // expects username and password in req.body
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ error: 'Username and password required' });

    dynamodb.query(
      {
        TableName: TABLE_NAME,
        ProjectionExpression: '#un, #id, #pwd',
        KeyConditionExpression: '#un = :user',
        ExpressionAttributeNames: {
          '#un': 'username',
          '#id': 'id',
          '#pwd': 'password',
        },
        ExpressionAttributeValues: {
          ':user': username,
        },
        ScanIndexForward: false,
      },
      (err, data) => {
        if (err) {
          console.error(
            'Unable to query. Error:',
            JSON.stringify(err, null, 2)
          );
          res.status(500).json(err);
        } else {
          console.log('Query succeeded.');
          if (data.Items.length < 1) {
            console.log({ error: `No user found for username: ${username}` });
            res.status(401).json({ error: 'Wrong username and/or password' });
          } else if (
            data.Items.length > 0 &&
            data.Items[0].password !== password
          ) {
            console.log({ error: 'Wrong username and/or password' });
            res.status(401).json({ error: 'Wrong username and/or password' });
          } else {
            const token = jwt.sign(
              { id: data.Items[0].id },
              process.env.SESSION_SECRET,
              {
                expiresIn: 86400,
              }
            );
            const user = data.Items[0];
            delete user.password;
            res.json({
              user,
              token,
            });
          }
        }
      }
    );
  } catch (error) {
    return res.status(401).json({ error: 'Something went wrong' });
  }
});

router.delete('/logout', (req, res, next) => {
  res.sendStatus(204);
});

router.get('/user', (req, res, next) => {
  if (req.user) {
    return res.json(req.user);
  } else {
    return res.json({});
  }
});

module.exports = router;
