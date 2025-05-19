const path = require('path');
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 5000;
require('./startup/routes')(app);
require('./startup/db')();

const http = require('http').createServer(app);

http.listen(port, () => {
  console.log(`listening on *:${port}`);
});