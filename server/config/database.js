const Sequelize = require('sequelize');

//Need to add a database that is mysql/postgres/sql compatible
//here for the db to work
var sequelize = new Sequelize('compose', 'admin', 'kimchiboyz', {
  host: 'aws-us-east-1-portal.22.dblayer.com',
  dialect: 'postgres',
  port: '15215',
  //logging: false,
  options: {
    timezone: 'America/Los_Angeles',
  }
});

sequelize
.authenticate()
.then(function(err) {
  console.log('\033[34m <TRPPR> Connected to DB. \033[0m');

})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});

module.exports = sequelize;
