const express = require('express');
const morgan = require('morgan');

const app = express();

const blogPostRouter = require('./blog-posts');

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/main/index.html');
});

app.use('/blog-posts', blogPostRouter);

app.listen(process.env.PORT || 1947, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 1947}`);
});
