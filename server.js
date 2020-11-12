const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// routes
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
  });
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//cors(origins = "*", allowedHeaders = "*")
//CrossOrigin(
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
const db = require("./app/models");
// set port, listen for requests
//const db = require("./app/models");

//const app = express();
//app.use(...);


const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "student"
  });
 
  Role.create({
    id: 2,
    name: "guide"
  });
 
  Role.create({
    id: 3,
    name: "hod"
  });

  Role.create({
    id: 4,
    name: "director"
  });
}

db.sequelize.sync();
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to authentication application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});