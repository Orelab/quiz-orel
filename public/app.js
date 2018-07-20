

$.ajax('/json/survey').done(function(survey)
{
	var qid;			// l'ID de la question courante
	var objQuestion; 	// la référence à l'objet JQUERY de la question courante

	survey = JSON.parse(survey);


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
			.html('<input type="radio" name="question'+qid+'"> ' + survey[i].response)
			.addClass('response')
			.appendTo(objQuestion);


		console.log( survey[i] );
	}

});