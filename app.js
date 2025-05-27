const express = require('express');
const fetch = require('node-fetch'); 
const app = express();

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ4MzI1MDQxLCJpYXQiOjE3NDgzMjQ3NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjZjZmQwNzRmLWQ1NTYtNGJkYi1iYTQ3LWM2ZjQyOWUxOWRmYSIsInN1YiI6IjIyMzExYTY5MDNAc3JlZW5pZGhpLmVkdS5pbiJ9LCJlbWFpbCI6IjIyMzExYTY5MDNAc3JlZW5pZGhpLmVkdS5pbiIsIm5hbWUiOiJnb2xpIHZhaXNobmF2aSIsInJvbGxObyI6IjIyMzExYTY5MDMiLCJhY2Nlc3NDb2RlIjoiUENxQVVLIiwiY2xpZW50SUQiOiI2Y2ZkMDc0Zi1kNTU2LTRiZGItYmE0Ny1jNmY0MjllMTlkZmEiLCJjbGllbnRTZWNyZXQiOiJaV0FFTWVSYXlja3ZUR1dEIn0.bbFlxezK1JVjBKf9GlJKF6UdO0fqMpsVgSgGO9nRVeg"; 

app.get('/stocks', async (req, res) => {
  const apiUrl = "http://20.244.56.144/evaluation-service/stocks/"; 

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.get('/stocks/NVDA', async (req, res) => {
  const apiUrl = "http://20.244.56.144/evaluation-service/stocks/NVDA"; 

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch error:', err.message);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});



