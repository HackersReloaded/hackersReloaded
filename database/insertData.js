var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("forbes");
  // var myobj = { name: "Company Inc", address: "Highway 37" };
  // var myobj = { id: 2, item: "drill", description: "This is a great", quantity: 30, price: "18.50", image:"images/drill1.jpg" };
  var myobj = { id: 3, item: "hammer", description: "This is a great", quantity: 30, price: "18.50", image:"images/drill1.jpg" };

  dbo.collection("customerx").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});