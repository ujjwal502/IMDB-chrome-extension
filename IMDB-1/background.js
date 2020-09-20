console.log('my extension');


chrome.contextMenus.create({

	//this will be displayed on the menu
	'title': 'Search IMDB for "%s"',
	//contexts here is selection as we want to extract the highlighted text.
    'contexts': ['selection'],
    
	//This is the event handler
	'onclick': async (context) => {
		const name = context.selectionText;
		const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=83188c80`)
		const {
			Title,
			Year,
			Runtime,
			Genre,
			Actors,
			imdbRating
		} = await response.json()
		const newLine = "\r\n"
		let message = `Title : ${Title}`
		message += newLine
		message += `Year : ${Year}`
		message += newLine
		message += `Runtime : ${Runtime}`
		message += newLine
		message += `Genre : ${Genre}`
		message += newLine
		message += `Actors : ${Actors}`
		message += newLine
		message += `IMDb Rating : ${imdbRating}`
		alert(message)
	}
});
