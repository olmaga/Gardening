// Install express server
var express = require('express');
var app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(function (req, res) {
    var lang = req.headers['accept-language'].substr(0, 2);
    // we overwrite the language with the url language
    if (req.path.length >= 3) {
        lang = req.path.substr(1, 3);
    }
    res.sendFile(__dirname + "/dist/" + lang + "/index.html");
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
