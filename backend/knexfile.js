require('dotenv').config({path: '.env'});

module.exports = {

development: {
client: 'mysql',
connection: {
host : process.env.MYSQL_HOST,
user : process.env.MYSQL_USER,
password : process.env.MYSQL_PASS,
database : process.env.MYSQL_TABLE,
port: 3308
},
pool: {
min: 0,
max: 10
},
migrations: {
    directory: 'migrations'
  }
},

production: {
client: 'mysql',
connection: {
host : process.env.MYSQL_HOST,
user : process.env.MYSQL_USER,
password : process.env.MYSQL_PASS,
database : process.env.MYSQL_TABLE
},
pool: {
min: 0,
max: 10
}

}

};