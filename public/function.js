

function generate_survey( survey )
{
	var qid;			// l'ID de la question courante
	var objQuestion; 	// la référence à l'objet JQUERY de la question courante


	// Génération du questionnaire

	for( var i=0 ; i<survey.length ; i++ )
	{
		if( qid != survey[i].id_question )
		{
			qid = survey[i].id_question;

			objQuestion = $('<div>')
				.html(survey[i].question)
				.addClass('question')
				.data('qid', qid)
				.appendTo('#survey');
		}

		$('<div>')
			.append('<input type="radio" name="question'+qid+'">')
			.append('<label>' + survey[i].response + '</label>')
			.data('rid', survey[i].id_response)
			.data('status', survey[i].is_good?'correct':'wrong')
			.addClass('response')
			.appendTo(objQuestion);
	}


	// Génération du bouton "sauvegarder les réponses"

	$('<button id="save">Enregistrer</button>')
		.appendTo('#survey');

}