const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('/', (request, response) => {
	response.send("hello world");
});

app.get('/json', (request, response) => {
    response.status(200).json({"name": "nikhil"});
});

app.listen(3000, () => {
	console.log('Express running on localhost: 3000');
});
