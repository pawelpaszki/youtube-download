import dotenv from 'dotenv';
import express from 'express'
import search from'youtube-search'
dotenv.config();
const app = express()
const port = process.env.PORT

var opts = {
  maxResults: 20,
  key: process.env.YOUTUBE_KEY
};

app.get('/:id', (req, res) => {
  const query = req.query.id;
  search(query, opts, function(err, results) {
    if(err) return console.log(err);
  
    return res.json(results);
  });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})