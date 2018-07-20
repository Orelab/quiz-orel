

/*
	Connecting the database
*/

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'quiz',
  database : 'quiz',
  password : 'LSrzA4U8xPvTHJZQ'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});


/*
	Initialize the webserver on port 3000
*/

var express = require('express');
var app = express();

app.use(express.static('public'));


app.get('/json/survey', function (req, res) {
	var sql = '										\
		SELECT  									\
			question.id AS id_question,				\
			question.text AS question,				\
			response.id AS id_response,				\
			response.text AS response,				\
			is_good									\
		FROM question 								\
		JOIN response 								\
			ON question.id = response.fk_question	\
	;';

	connection.query(sql, function (error, results, fields) {
		if (error) throw error;
	  
		res.send(JSON.stringify(results));
	});

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});