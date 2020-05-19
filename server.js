const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')
app.use(express.static(path.join(__dirname, 'client/build')));
if(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  }
//Route
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
//Start
app.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})
