var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const getAllItems = function(callback) {
  // TODO - your code here!

  var myResult;

    console.log("Connected!");

    MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("forbes");
  dbo.collection("customerx").find({}).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    myResult = result;

    callback(result);
   

    db.close();
  		});
	});

    // console.log(myResult);

	// callback(myResult);


};

const getItem = function(itemx, callback) {

	console.log(" simple query: ");
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("forbes");
  // var query = { item: "hammer" };
  dbo.collection("customerx").find(itemx).toArray(function(err, result) {
    if (err) throw err;
    
    // console.log(result);
    callback(result);

    db.close();
  		});
	});



};

module.exports = {
  getAllItems, getItem
};