const express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./../db/queries.js');

// http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/
app.get('/rooms/:id/reviews', db.getRoomReviews);

app.use(express.static(path.join(__dirname, '/../public')));

app.listen(3004, () => console.log('App listening on port 3004...'));