var mysql = require('mysql');

var con = mysql.createConnection({
  host: "local host",
  user: "root",
  database: "OneStop"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM tools', (err, results, fields) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertOne = function(id, image, name, quantity, price, description, cb) {
  con.query('INSERT INTO tools(id, image, name, quantity, price, description) VALUES (?, ?, ?, ?, ?, ?)',
  [id, image, name, quantity, price, description], (err, results, fields) => {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
