const crairTarefa = () => {
	evento.preventDefault()
	const input = document.querySelector('[data-form-input]')
	const valor = input.value

	console.log(valor )
	input.value = " "

	const tarefa = document.querySelector('[data-task]')

}

const novaTarefa = document.querySelector('[data-form-button]')


novaTarefa.addEventListener('click', (evento))