const express = require('express');
const app = express();
var ibmdb = require('ibm_db');
require('cf-deployment-tracker-client').track();

var routes = require('./routes');
var router = require('./routes/router');

var db2;
var hasConnect = false;

// development only

if (process.env.VCAP_SERVICES) {
  var env = JSON.parse(process.env.VCAP_SERVICES);
  if (env['dashDB']) {
    hasConnect = true;
    db2 = env['dashDB'][0].credentials;
  }

}

if (hasConnect == false) {

  db2 = {
    db: "BLUDB",
    hostname: "xxxx",
    port: 50000,
    username: "xxx",
    password: "xxx"
  };
}

var connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;


app.use(express.static(__dirname + '/build'));
app.use('/api',router)
app.get('/database', routes.listSysTables(ibmdb, connString));

app.get('/', (req, res) => res.json({'prop':'Hello World!'}))

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})