//import express from "express";
const express = require('express');
const path = require('path');
const getURL = require('./Controllers/urlController');


const app = express();

app.get('/', checkURL ,getURL);
app.get('/url', (req,res)=>res.sendFile(__dirname+'/index_url.html') )
app.get('/get', function(req,res){res.sendFile(__dirname + "/index_get.html")} );
app.get('/post', function(req,res){res.sendFile(__dirname + "/index_post.html")} );
app.post("/post",function(req,res){res.sendFile(__dirname + "/index_post.html")} )

app.listen(3000, ()=> console.log('Listening'));

function checkURL(req,res,next) {
    console.log('query',req.query.id);
    if(req.query.url === undefined) {
        res.sendFile(__dirname+'/index.html');
    } else {
        next();
    }
}