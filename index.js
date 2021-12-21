const express = require('express'); //Import the express dependency
var bodyParser = require('body-parser');
var mysql = require('./mysql');

const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', { root: __dirname });      //server responds by sending the index.html file to the client's browser
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/thank-you', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('thankyou.html', { root: __dirname });      //server responds by sending the index.html file to the client's browser
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});


//Idiomatic expression in express to route and respond to a client request
app.get('/admin', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('thankyou.html', { root: __dirname });      //server responds by sending the index.html file to the client's browser
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.post('/submit-user', urlencodedParser, function (req, res) {
    console.log("USERNAME ++++++++++++", req.body);

    var obj = new Object();
    obj.name = req.body.name;
    obj.username = req.body.username;
    obj.email = req.body.email;
    obj.faculty = req.body.faculty;
    obj.organization = req.body.organization;
    obj.projtype = req.body.projtype;
    obj.projname = req.body.projname;
    obj.projdes = req.body.projdes;
    obj.repo = req.body.repo;
    obj.docker = req.body.docker;
    obj.gpu = req.body.gpu;
    obj.expdate = req.body.expdate;
    obj.shared = req.body.shared;
    obj.nouser = req.body.nouser;
    obj.known = req.body.known;
    obj.data = req.body.data;

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':'+ today.getSeconds();

    obj.reg_date = date;
    var jsonString = JSON.stringify(obj);

    
    obj.condition = req.body.condition;
    
    mysql.user_insert(obj)
    res.sendFile('thankyou.html', { root: __dirname });      //server responds by sending the index.html file to the client's 
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});

app.use(express.static(__dirname + '/public'));
