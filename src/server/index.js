const dotenv = require( 'dotenv' );
dotenv.config();
var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require("aylien_textapi");

const app = express()
app.use(cors())

app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(express.static('dist'))

console.log(__dirname)

let textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

// Setup default route for app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"../../dist/index.html"))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// Setup route for handling Aylien API requests
app.post( '/process', function ( request, response ) {

	console.log( `'Process' POST route triggered with the following content:` );
	console.log( request.body );

	textapi.classify( {
			'url': request.body.url
		}, function ( apiError, apiResponse ) {

			if( apiError === null ){

				console.log( apiResponse );
				response.send( apiResponse );
				

			}else{

				response.send( { 'error': 'Could not find and/or process URL.' } );

			}

		});

});