const notesRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../utils/fsUtils');

//GET /api/notes to read the db.json file and return all saved notes as JSON.
notesRouter.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST /api/notes to write a new note to the file
notesRouter.post('/', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = notesRouter;