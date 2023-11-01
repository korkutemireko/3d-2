require("dotenv").config();
var fs = require('fs');
var path=require("path");
var http = require('http');
var https = require('https');
var cors=require("cors");
var helmet=require("helmet");
var os=require("os");

var express = require('express');


var app = express();



app.use(cors());


//app.use(express.static(`${__dirname}`));
//app.use("/static", express.static(__dirname + "/nodejs"));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());





app.use(express.urlencoded({ extended: false }));


/* app.use(function (req, res, next) {
    res.setHeader(
      'Content-Security-Policy-Report-Only',
      "default-src 'self'; font-src 'self'; img-src 'self' https://img.freepik.com/premium-vector/world-map-polygon-line-style-vector-design-illustration_4974-218.jpg; script-src 'self' https://cdnjs.cloudflare.com/ajax/libs/three.js/0.145.0/three.min.js , https://mamboleoo.be/learnThree/demos/OBJLoader.js; style-src 'self'; frame-src 'self'"
    );
    next();
  });*/ 

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,ALL');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}); 

/*app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://emirkorkut.com'+req.url);
  else
    next() /* Continue to other routes if we're not redirecting */
//});

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  });
  




app.get('/',function(req,res,next) {
    res.sendFile( __dirname + "/index.html");
   // res.download('eko.pdf');
}); 

app.get('/house-2',function(req,res,next) {
  res.sendFile( __dirname + "/index-house2.html");
 // res.download('eko.pdf');
});

app.get('/contact',function(req,res) {
   // res.send({"name":process.pid});
      res.sendFile( __dirname + "/aframe-ar.html");
});

app.get('/aframe',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/index-ev-1.html");
});

app.get('/ocr',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/aframe-hiro.html");
});

app.get('/ocr2',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/aframe-hiro2.html");
});

app.get('/vr',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/aframe-vr2.html");
});
 app.get('/ar3',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/aframe-house1-ar.html");
});
 app.get('/hit',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/sketchfab-ar.html");
});
 app.get('/hit2',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/sketchfab-ar2.html");
});
 app.get('/tablo',function(req,res) {
  // res.send({"name":process.pid});
     res.sendFile( __dirname + "/aframe-grass-delek-model2.html");
});

app.post('/megagenContact',function(req,res) {

  console.log(req.body);

  const MongoClient = require('mongodb').MongoClient;
  //const URL = 'mongodb://localhost:27017';
  const URL = 'mongodb+srv://megagen:megagen07@cluster0.p6cbt1r.mongodb.net/?authSource=admin';
  
  
  
  MongoClient.connect(URL, (err, client) => {
    if (err) throw err;
  
    const db = client.db('megagen');
  
   
     var veriler_3=[req.body];
  
  
    db.collection('contact').insertMany(veriler_3, (err, result) => {
      if (err) throw err;
      console.log(result.insertedCount + ' kayıt eklendi.');
     // client.close();
    });
  
  });

});

 var port=process.env.PORT || 8080;


var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app); dsfdsf

/*httpsServer.listen(8443,ip_1,function() {
    console.log("server 84433");
}); */

httpServer.listen(port,function() {
    console.log("server 8080");
});

