const express = require('express')
const path = require('node:path')
const app = express()

app.set('port', process.env.PORT || 8080)
app.use(express.static('public'))
// app.set('view engine', 'pug')
const views = path.resolve('./views')

app.get('/', (_, res) => {
	// res.render('home')
	res.sendFile(path.join(views, 'index.html'))
})

app.listen(app.get('port'), () => {
	console.log(`Listening on http://localhost:${app.get('port')}`)
})
