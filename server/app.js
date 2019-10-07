const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));//changed to hosted
app.use(favicon(`${__dirname}/../hosted/img/favicon.png`));

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', expressHandlebars({
  defaultLayout: '',
}));
app.set('view engine','handlebars');
app.set('views', `${__dirname}/../views`);

app.use(cookieParser());

router(app);

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});

