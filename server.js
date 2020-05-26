const express = require('express');
const app = express();


// Middleware
// below logger are simple example of middleware
// Can use for complex task like authorization & authentication
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};
const timeLogger = (request, response, next) => {
    console.log('Datetime:', new Date(Date.now()).toString());
    next();
}

app.use(express.static('public'))
// Every route uses these middleware functions with app.use, OR you can specify for every call
app.use(urlLogger, timeLogger)

app.get('/', (request, response) => {
	response.send("hello world");
});

app.get('/json', (request, response) => {
    response.status(200).json({"name": "nikhil"});
});

app.listen(3000, () => {
	console.log('Express running on localhost: 3000');
});
