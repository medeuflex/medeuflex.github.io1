const express = require('express');
const app = express();
const path = require('path');

//Set view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//Load routes
const home = require('./routes/home');

app.use(express.static('public'));
//Use routes
app.use('/', home);


//Server
const port = process.env.PORT || 4500;

app.listen(port, () => {

    console.log(`listening on port ${port}`);

});