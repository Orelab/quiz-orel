
/*
	Au chargement de la page, on va récupérer l'ensemble des questions et réponses.
	Ce tableau de données est formaté de telle manière que chaque ligne contient une 
	réponse, et sa question. Il est donc logique que les réponses sont écrites autant
	de fois qu'il y a de réponses.

	Par ailleurs, on s'est débrouillé pour que les réponses soient groupées ensembles,
	donc lorsqu'on lit séquentiellement le tableau de données, si la question est 
	différente de la précédente, on change de groupe. A ce moment-là, on peu construire
	dans le HTML la nouvelle question !

*/
$.ajax('/json/survey').done(function(survey)
{
	survey = JSON.parse(survey);

	generate_survey( survey );
});



/*
	Récupérer les réponses, et les envoyer au serveur pour enregistrement dans
	la base de données.
*/

$('body').delegate('#save', 'click', function()
{
	var responses = [];

	$('input:checked').each(function(id, el){
		var rid = $(el).parent().data('rid');
		responses.push(rid);
	})

	console.log(responses);
});