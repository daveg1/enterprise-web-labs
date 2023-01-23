// Rounds to nearest 50
function round(value) {
	return Math.round(value / 50) * 50
}

const unit = '£'

window.onload = (e) => {
	const formElem = document.querySelector('#budget-form')
	const outputElem = document.querySelector('#price-output')

	formElem.addEventListener('submit', (e) => {
		e.preventDefault()

		const form = new FormData(formElem)
		const salary = form.get('salary')
		const days = form.get('days')

		console.log('Calculating price', salary, days)

		const finalPrice = (salary / 365) * days
		outputElem.textContent = `${unit} ${round(finalPrice)}`
	})
}
