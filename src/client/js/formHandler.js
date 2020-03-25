import validURL from  "./nameChecker";

const handleSubmit = (event) => {
    event.preventDefault();

  // Get form data
	let formText = ( document.getElementById( 'URL' ) ) ? document.getElementById( 'URL' ).value: "";

	// Exit function early if the URL is invalid
	if( !validURL( formText ) ){

		alert( "Please enter a valid, full URL address.\nExample: https://www.google.com/" );
		return false;

	}

    document.getElementById( 'Results' ).innerHTML = 'Processing URL...';

 fetch("/process", {
    method : "POST",
    credentials : "same-origin",
    headers : {
        "Content-type" : "application/json"
    },
    body : JSON.stringify({
        "url" : formText
    })
 })
 .then((response)=>{
     return response.json();
 })
 .then((data)=> {
     let resultText = "";
     let validResult = false;

     if(data.catagories) {
         if(data.catagories.length > 0) {
             resultText = data.catagories[0].label;
             validResult = true; 
         }
     }
     if(!validResult) {
         resultText = "Sorry, we could not accurately classify the text found at: " + formText;
     }
     document.getElementById( 'Results' ).innerHTML = resultText;

 });
};
export { handleSubmit };