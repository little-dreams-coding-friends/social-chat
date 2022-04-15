const path = require('path');
const express = require('express');
const app = express();


app.get('/test', async (req:any, res:any) => {
  res.json({message: "Job's Done!"}).status(200);
});

module.exports = app;