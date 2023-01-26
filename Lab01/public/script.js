// Rounds to nearest 50

const unit = '£'

window.onload = (e) => {
	const formElem = document.querySelector('#budget-form')
	const outputElem = document.querySelector('#price-output')

	formElem.addEventListener('submit', (e) => {
		e.preventDefault()

		const form = new FormData(formElem)
		const salary = form.get('salary')
		const days = form.get('days')

		fetch('/salary', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ salary, days }),
		}).then(async (res) => {
			const data = await res.json()
			let output = ''

			if (res.status === 200) {
				output = `${unit} ${data.finalPrice}`
			} else if (res.status === 500) {
				output = `Error: ${data.reason}`
			} else {
				output = 'Error: something bad happened'
			}

			outputElem.textContent = output
		})
	})
}
