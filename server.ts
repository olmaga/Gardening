// Install express server
import {initApi} from './backend/api';

const express = require('express');
const fs = require('fs');
const app = express();

app.use('/api', initApi());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.use((req, res) => {
  let lang = req.headers['accept-language'].substr(0, 2);

  // we overwrite the language with the url language
  if (req.path.length >= 3) {
    lang = req.path.substr(1, 2);
  }

  if (fs.existsSync(__dirname + '/dist/en/index.html')) {
    res.sendFile(`${__dirname}/dist/${lang}/index.html`);
  } else {
    res.sendFile(`${__dirname}/dist/index.html`);
  }

});

app.listen(process.env.PORT || 8084);
