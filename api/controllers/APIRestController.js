'use strict';
var mongoose = require('mongoose'),
 Commentaire = mongoose.model('Commentaire'),
 Film = mongoose.model('Film');
var mongo = require('./mongo.js');
var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
var Mongo = require('mongodb')
var BSON = Mongo.BSONPure;
/**

var host = process.env.MONGODB_ADDON_HOST;
var uri = process.env.MONGODB_ADDON_URI;
var pwd = process.env.MONGODB_ADDON_PASSWORD;
var user = process.env.MONGODB_ADDON_USER;
var db = process.env.MONGODB_ADDON_DB;
var port = process.env.MONGODB_ADDON_PORT;
**/

	module.exports = 
	{
	
		list_all_film: function(req, res) {
			MongoClient.connect(url, function(err, back) {
				if (err) throw err;
				var dbo = back.db("API");
				
				dbo.collection("films").find().toArray(function(err, film) {
					if (err) throw err;
					res.status(200);
					res.json(film);
			    });
			});
		},

		create_a_film: function(req, response) 
		{
			MongoClient.connect(url, function(err, back)
			{
				if (err) throw err;
				var dbo = back.db("API");
				
//					console.log("body");
//					console.log(req.body);
				dbo.collection("films").insertOne(req.body, function(err, res)
				{
					if (err) throw err;
					response.status(201);
					response.json({ message: 'film créé '});
				});								
			});
		},
		
		create_a_commentaire: function(req, response)
		{
			MongoClient.connect(url, function(err, back)
			{
				if (err) throw err;
				var dbo = back.db("API");
				
				
//					console.log("body");
//					console.log(req.body);					
				dbo.collection("commentaires").insertOne(req.body, function(err, res)
				{
					if (err) throw err;
					response.status(201);
					response.json({ message: 'commentaire créé '});
				});								
			});
		},
		
		
		read_a_film: function(req, response)
		{
			MongoClient.connect(url, function(err, back)
			{
				if (err) throw err;
				var dbo = back.db("API");
				
				try {
						dbo.collection("films").findOne( {"_id": new Mongo.ObjectID(req.params.filmId) }, function(err, film) {
							console.log("film");
							console.log(film);
							if (err)
							{
								response.send(err);
								response.status(500);
							} else 
							{
								if (film == null)
								{
									response.status(500);
									response.send ("mauvais ID");
									
								} else {
									response.status(200);
									response.json(film);
								
								}
							}
						});
					}
					catch (err) 
					{
							response.send(err);
							response.status(500);
					}
			});
		}
		
	
	};
	

		//  var new_film = new film(req.body);
		//  new_film.save(function(err, film) {
		//    if (err)
		//      res.send(err);
		//    res.json({ message: 'film créé : '} + film);
		//  });
	

/**
	


	exports.update_a_film = function(req, res) {
	  film.findOneAndUpdate({_id: req.params.filmId}, req.body, {new: true}, function(err, film) {
		if (err)
		  res.send(err);
		res.json({ message: 'Film mis à jour : ' } + film);
	  });
	};


	exports.delete_a_film = function(req, res) {
	  film.remove({
		_id: req.params.filmId
	  }, function(err, film) {
		if (err)
		  res.send(err);
		res.json({ message: 'film supprimé avec succès' });
	  });
	};

	exports.list_a_commentaire = function(req, res) {
	  commentaire.find({}, function(err, commentaire) {
		if (err)
		  res.send(err);
		res.json(commentaire);
	  });
	};


	

	exports.connection = function(req, res) {
	  var connect = new connexion(req.body);
	  connect.save(function(err, connexion) {
		if (err)
		  res.send(err);
		res.json(connexion);
	  });
	};

**/