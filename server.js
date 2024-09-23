const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4445;

app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.use(express.static('public'));

app.listen(PORT,() => {
    console.log("CREATED IN "+ PORT);
});