document.querySelector("#food").addEventListener("change", function() {
    var type = document.querySelectorAll("input[name=meal-type]:checked")[0].value
	console.log("The meal category is " + type);

	var food =document.querySelector("#food").value;
	console.log("The food/ingredient is " + food);

	// ?ml - words with a meaning similar to
	// &rel_jja - nouns that are often described by the adjective yellow
	// ?lc=drink - words that often follow "drink" in a sentence, 
	
	let query = 'https://api.datamuse.com/words?ml='+ type+'&rel_jja='+food+'&max=10';
	//let query = 'https://api.datamuse.com/words?ml='+ type+'?lc='+food+'&max=10';

	console.log(query);
  	$.getJSON(query,function(json){
        //Use json to update the values.  I would 
        //print it to the console
        console.log(JSON.stringify(json));
       	var random = Math.floor(Math.random() * json.length); 
       	console.log("Random is " + random);

       	var suggestion = json[random].word;

       	document.querySelector("h2").innerHTML = "My Suggestion Is.... " + food + " "+ suggestion;

    });
  });


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}