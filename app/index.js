const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res){

	MongoClient.connect('mongodb://localhost:27017/mern-starter', function(err, db){
		if(err) throw err

		//this doesn't actually do what it is supposed to
		db.collection('images').find().limit(9).skip(Math.random()*db.collection('images').count()).toArray(function(err, result){
			if (err) throw err
			res.render('index', {
				"data": result
			})
		})
	})
})

app.listen(3000, function(){
	console.log("App listening on port 3000")
})