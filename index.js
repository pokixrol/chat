const express = require('express');


const app = express();
const server = app.listen(4000, function(){
console.log('Server is running on port 4000');
});

app.use(express.static('public'));