const express = require("express")
const app = express()
const port = 80

app.get('/', function(req, res) {
	res.sendFile(__dirname + "/currentlyplaying.mp3")
})


app.listen(port, function() {
	console.log(`Using ${port}`);
})
