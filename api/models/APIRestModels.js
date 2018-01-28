'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmSchema = Schema({
  _id: Schema.Types.ObjectId,
  film: String,
  auteur: String,
  commentaire: [{ type: Schema.Types.ObjectId, ref: 'Commentaire' }],
 // connection: [{ type: Schema.Types.ObjectId, ref: 'Connection' }]
});


var commentaireSchema = Schema({
  _id: Schema.Types.ObjectId,
  text: String,
});
/**
var connectionSchema = Schema({
  _id: Schema.Types.ObjectId,
  user: String,
  mdp: String,
  films: [{ type: Schema.Types.ObjectId, ref: 'Film' }]
});
**/
var Film = mongoose.model('Film', filmSchema);
var Commentaire = mongoose.model('Commentaire', commentaireSchema);
//var Connection = mongoose.model('Connection', connectionSchema);

module.exports = Film
module.exports = Commentaire
//module.exports = Connection


/**
var checkToken = function(token){
for (var i=0; i<tokens.lenght; i++){
  if(tokens[i].nom === filmId){
  return true;
  }
}
}
**/