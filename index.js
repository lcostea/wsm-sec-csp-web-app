// Requiring module
const express = require("express");
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));


// app.use(express.static(path.join(__dirname, 'public'), 
// {
//     setHeaders: (res, path, stat) => {
//         res.setHeader("Content-Security-Policy", "default-src 'self'; img-src https://www.google.com");
//     }
// }))

// Server setup
app.listen((3000), () => {
    console.log("Server is Running on port 3000");
})