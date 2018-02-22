const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
// const db = require('');

// FOR DATABASE   getAllItems   query:
const dbx = require('./database/getAllItems');


const PORT = 4101;
const app = express();



app.use(bodyParser.json());

// app.use(express.static(__dirname + '/../react-client/front'));
// app.use(express.static(path.join(__dirname, 'publicx')));
// app.use('/static', express.static('publicx'))
app.use('/static', express.static(path.join(__dirname, 'publicx')));


app.get('/api/transactions', (req, res) => {

	res.send(' API TRANS: ');
	res.end();

});

app.get('/product', (req, res) => {

	console.log(" PRODUCT  endpoint requested: ")
  	var query = { item: "hammer" };

	dbx.getItem(query, function(datax){

		// res.send(' PRODUCT  endpoint requested: ');
		res.send(datax);

		res.end();


	});

	

});

app.get('/', (req, res) => {

	console.log(" root  endpoint requested: ")	
	dbx.getItem();
	res.send(' You reached my server. \n This is root endpoint: ');
	res.end();

});

app.get('/products', (req, res) => {

	console.log(" products  endpoint requested: ")

	dbx.getAllItems(function(datax){
    // console.log(dastax);
    // var mydata = JSON.stringify(datax);
    res.send(datax);
    // res.send(mydata);
    res.end();
  })

});


app.listen(PORT, () => {
	console.log('listening on port ' + PORT);
	// console.log(`listening on port ${PORT}`);

});

