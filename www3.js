const http = require('http');
const dateET = require('./src/dateTimeET');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Andrus Rinde, veebiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Andrus Rinde, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أœlikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, see leht aga on juba programmeeritud.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write(pageHead);
	res.write(pageBody);
	res.write('Tأ¤na on ' + dateET.day() + ', ' + dateET.fullDate(1) + ', kell oli lehe avamise hetkel: ' + dateET.fullTime() +'.');
	res.write(pageFoot);
	//res.write('Veeb lأ¤kski kأ¤ima!');
	return res.end();
}).listen(5132);