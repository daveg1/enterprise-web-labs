const express = require('express')
const path = require('node:path')
const app = express()

app.set('port', process.env.PORT || 8080)
app.use(express.static('public'))
app.use(express.json())
// app.set('view engine', 'pug')

const views = path.resolve('./views')

app.get('/', (_, res) => {
	// res.render('home')
	res.sendFile(path.join(views, 'index.html'))
})

function round(value) {
	return Math.round(value / 50) * 50
}

app.post('/salary', (req, res) => {
	const { salary, days } = req.body

	try {
		const finalPrice = round((+salary / 365) * +days)
		res.status(200).json({ finalPrice })
	} catch (error) {
		res.status(500).json({ reason: error.message })
	}
})

app.listen(app.get('port'), () => {
	console.log(`Listening on http://localhost:${app.get('port')}`)
})
