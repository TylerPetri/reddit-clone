const router = require('express').Router();
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const awsConfig = {
  region: 'us-east-2',
};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'Reddit-Clone-Users';

router.get('/users', (req, res) => {
  const params = {
    TableName: table,
  };
  dynamodb.scan(params, (err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(data.Items);
    }
  });
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

    // new User({
    //   _id: mongoose.Types.ObjectId(),
    //   username: username,
    //   email: email,
    //   password: password,
    // }).save((err, data) => {
    //   if (err) {
    //     console.error(
    //       'Unable to add user. Error JSON:',
    //       JSON.stringify(err, null, 2)
    //     );
    //     res.json({ message: 'Error has occurred' });
    //   } else {
    //     const token = jwt.sign({ id: data._id }, process.env.SESSION_SECRET, {
    //       expiresIn: 86400,
    //     });
    //     res.json({
    //       ...data.$__,
    //       token,
    //     });
    //   }
    // });
  } catch (error) {
    if (error.name === 'MongooseUniqueError') {
      return res.status(401).json({ error: 'User already exists' });
    } else if (error.name === 'MongooseValidationError') {
      return res.status(401).json({ error: 'Validation error' });
    } else next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    // expects username and password in req.body
    const { username, password } = req.body;
    // if (!username || !password)
    //   return res.status(400).json({ error: 'Username and password required' });

    // const user = await User.findOne({
    //   username: req.body.username,
    // });

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
    next(error);
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
