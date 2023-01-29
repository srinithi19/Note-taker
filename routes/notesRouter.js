const notesRouter = require('express').Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../utils/fsUtils');

//GET /api/notes to read the db.json file and return all saved notes as JSON.
notesRouter.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});