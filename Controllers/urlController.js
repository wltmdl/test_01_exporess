const request = require('request');
const path = require('path');


const getURL = (req,res)=> {
    console.log('in getURL',req.query);
    let theURL = '';
    if (!req.query.url.includes("http")){
        theURL = 'http://www.' + req.query.url;
    } 
    request(theURL, function(err,resp,body){
        console.error('error:',err);
        console.log('statusCode:', resp && resp.statusCode );
        //console.log('body:',body);
    
        if ( resp && resp.statusCode === 200 ) {
            //res.sendFile( path.dirname(__dirname)+"/index.html")
            res.send('Up!')
   
        } else {
            //res.sendFile(__dirname + "/index_post.html")
            //res.sendFile( path.dirname(__dirname)+"/index.html")
            res.send('Down!')

        }
    })


}

module.exports = getURL;