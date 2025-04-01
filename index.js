const express = require('express');
const cors = require('cors');
const axios = require('axios');
const env = require('dotenv').config();

const app = express();
app.use(cors());

app.get('/proxy', async (req, res) => {
  const folderUrl = encodeURIComponent(req.query.folderUrl);  
  console.log(req.query.folderUrl);
  try {
    const response = await axios.get(process.env.ScriptURL + `?folderUrl=${folderUrl}`);
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
});

app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000 ');
});
