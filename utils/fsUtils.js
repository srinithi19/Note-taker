const fs = require('fs');
const util = require('util');

//Promised version of readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the file given a fileNmae and data.
 *  @param {string} fileName The file you want to write to.
 *  @param {object} data The content you want to write to the file.
 *  @returns {void} Nothing
 */
 const writeToFile = (fileName, data) =>
 fs.writeFile(fileName, JSON.stringify(data, null, 4), (err) =>
   err ? console.error(err) : console.info(`\nData written to ${fileName} file`)
 );

 /**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };
  
  module.exports = { readFromFile, writeToFile, readAndAppend };