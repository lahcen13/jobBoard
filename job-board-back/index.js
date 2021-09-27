const express = require('express')
const mysql = require('mysql');

const app = express()
const PORT = process.env.PORT || 5000



app.listen(PORT, () => {
    console.log('App listening on PORT: ' + PORT);
})