Afin d'utiliser cette API REST il est nécéssaire de se connecter sur http://88.185.195.174:3000

Les requettes fonctionnelles sont les suivantes : 
	get all films
	url :
		http://88.185.195.174:3000/film

	post creation de film
	url : 
		http://88.185.195.174:3000/film
	body :
		{
		  "film": "oui-oui",
		  "auteur": "un auteur"
		}

	post creation commentaire (les commentaires sont aux films par l'id du film)
	url : 
		http://localhost:3000/film/5a6dca582ac34d1e9ca6bc75/commentaire
	body : 
		{
		  "filmId": "5a6dca582ac34d1e9ca6bc75",
		  "text": "bonne critique"
		}


La requette non fonctionelle : 
	get film by id
	url :
		http://localhost:3000/film/5a6dca582ac34d1e9ca6bc75
