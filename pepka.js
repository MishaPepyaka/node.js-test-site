var express = require('express');

// Установка шаблонизатора handlebars

var app = express();

var handlebars = require('express-handlebars')
    .create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
});

// пользовательская страница 404
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

// пользовательская страница 500
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.render('404');
});

app.listen(app.get('port'), function () {
    console.log('Express запущен на http://localhost:' +
    app.get('port') + '; нажмите Ctrl+C для завершения.');
});

