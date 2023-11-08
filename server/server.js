const express = require("express");
require("express-async-errors");
const cors = require("cors");
const pathfs = require('path')

const app = express();

console.log("Enable cors...");
app.use(cors());
app.use(express.static('public'))
app.get('*', (req, res, next) => {
  res.sendFile(pathfs.resolve(__dirname, 'public', 'index.html'));
})
app.use((err, req, res, next ) => {
  console.log(err)
  res.status(500).send(err)
})


const port = process.env.PORT;
const server = app.listen(port, (err, _appName) => {
  console.log(`listening on port ${port}.`);
});

module.exports = app
