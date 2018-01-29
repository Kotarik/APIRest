'use strict';
module.exports = function(app) {
  var API = require('../controllers/APIRestController');

  // API Routes

	app.post('/film', API.create_a_film);
	app.get('/film', API.list_all_film);
	
	app.get('/film/:filmId', API.read_a_film);
	app.post('/film/:filmId/commentaire', API.create_a_commentaire);
	
//  app.route('/film/:filmId')
 //   .get(API.read_a_film)
 //   .put(API.update_a_film)
 //   .delete(API.delete_a_film);
	
//  app.route('/film/:filmId/commentaire')
 //   .get(API.list_a_commentaire)
 //   .post(API.create_a_commentaire);
	
 // app.route('/signin')
 //   .post(API.connection);
};
