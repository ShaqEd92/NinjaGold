const express = require("express");
const app = express();
app.use(express.static( __dirname + '/public/dist/public' ));

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.set('trust proxy', 1)

require('./server/config/routes.js')(app)

app.listen(3000, function () {
    console.log("listening on port 3000");
})


