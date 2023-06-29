import dotenv from 'dotenv';
import express from 'express'
import search from'youtube-search'
import { dlAudio } from 'youtube-exec';
dotenv.config();
const app = express()
const port = process.env.PORT
import cors from "cors";
app.use(cors());

var opts = {
  maxResults: 20,
  key: process.env.YOUTUBE_KEY
};

app.use(express.json());

app.get('/:id', (req, res) => {
  const query = req.query.id;
  search(query, opts, function(err, results) {
    if(err) return console.log(err);
  
    return res.json(results);
  });
})

app.post('/', async (req, res) => {
  console.log(req);
  const link = req.body.link;
  const name = req.body.name;
  console.log(req.body);
  try {
    await dlAudio({
      url: link,
      folder: "media", // optional, default: "youtube-exec"
      filename: name, // optional, default: video title
      quality: "best", // or "lowest"; default: "best"
    });
    res.status(200).send(`${name} downloaded successfully`);
  } catch (err) {
    res.status(500).send('Download failed: ' + err);
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})