const express = require('express');
//import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Priscille' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
