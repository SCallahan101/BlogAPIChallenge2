const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlogPosts} = require('./models');

BlogPosts.create('Green Sea', 'Sailors experience', 'John Joe', '5/10/2018');
BlogPosts.create('Lonely Road', 'Little girl gotten lost', 'John Joe2', '2/15/2018');
BlogPosts.create('Crazy Bus', 'Horror', 'John Joe3', '12/01/2018');


app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts.get());
});
