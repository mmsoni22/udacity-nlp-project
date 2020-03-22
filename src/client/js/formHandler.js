const handleSubmit = (event) => {
    event.preventDefault()

  // Get form data
	let formText = ( document.getElementById( 'URL' ) ) ? document.getElementById( 'URL' ).value: "";

	// Exit function early if the URL is invalid
	if( !validURL( formText ) ){

		alert( "Please enter a valid, full URL address.\nExample: https://www.google.com/" );
		return false;

	}

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }