const express = require('express')
const app = express()
var MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.send('Hello World')
})

app.get('/templatetest', function(req, res){

	var imageData = "nothing";
	MongoClient.connect('mongodb://localhost:27017/mern-starter', function(err, db){
		if(err) throw err

		db.collection('images').find().limit(9).skip(Math.random()*db.collection('images').count()).toArray(function(err, result){
			if (err) throw err
			console.log("no error");
			res.render('index', {
				"data": result
			})
		})
	})


})

app.use(express.static('public'))

app.listen(3000, function(){
	console.log("App listening on port 3000")
})

app.get('/imageSave', function(req, res){
		MongoClient.connect('mongodb://localhost:27017/mern-starter', function(err, db){
		if(err) throw err

			console.log('connected to db');
		  var imgArray = ["05251701.png",
                "05251702.png",
                "1020161.jpg",
                "1020294.jpg",
                "1020345.jpg",
                "20170422_231031.jpg",
                "P1000330.jpg",
                "P1000341.jpg",
                "P1000369.jpg",
                "P1000424.jpg",
                "P1000500.jpg",
                "P1000573.jpg",
                "P1000610.jpg",
                "P1000689.jpg",
                "P1000699.jpg",
                "P1000888.jpg",
                "P1010015.jpg",
                "P1010060.jpg",
                "P1010202.jpg",
                "P1010398.jpg",
                "P1010609.jpg",
                "P1010718.jpg",
                "P1010740.jpg",
                "P1010764.jpg",
                "P1010788.jpg",
                "P1010809.jpg",
                "P1010863.jpg",
                "P1010927.jpg",
                "P1020034.jpg",
                "P1020035.jpg",
                "P1020422.jpg",
                "P1020598.jpg",
                "P1020670.jpg"];
		for(var i = 0; i < imgArray.length; i++){
			db.collection('images').save({"filename": imgArray[i]})
		}
	})
})

app.get('/images', function(req, res){
	MongoClient.connect('mongodb://localhost:27017/mern-starter', function(err, db){
		if(err) throw err

			console.log('connected to db');
		db.collection('images').find().toArray(function(err, result){
			if (err) throw err
				res.send(result);
		})
	})

})