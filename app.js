//import express from "express";
const express = require('express');
const path = require('path');


const app = express();

app.get('/', function(req,res){res.sendFile(__dirname + "/index_get.html")} );
app.get('/post', function(req,res){res.sendFile(__dirname + "/index_post.html")} );
app.post("/",function(req,res){res.sendFile(__dirname + "/index_post.html")} )

app.listen(3000, ()=> console.log('Listening'));
