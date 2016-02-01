var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/pers';

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

var db;

MongoClient.connect(mongoUrl, function(err, database){
	if (err){
		console.log(err);
	} 
	console.log("conncected to server");
	db = database;
})


app.get('/', function(req, res){
	res.render('index');
})

app.listen(process.env.PORT || 3000);