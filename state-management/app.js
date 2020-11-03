'use strict';
const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/setCookie/:clr', (req, res) => {
  res.cookie('color', req.params.clr, {secure: true}).send('setCookie');
});

app.get('/readCookie', (req, res) => {
  console.log('Cookies', req.cookies);
  res.send('cookie read');
});

app.get('/deleteCookie', (req, res) => {
  res.clearCookie('color');
  res.send('deleteCookie');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
