var icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

icone.forEach((icona, i) => {
	$("#icone1").append(`<i style="padding: 5px; font-size: 30px" class="${icona.family} ${icona.prefix}${icona.name}"></i>`)
});

// Milestone 2
// Coloriamo le icone per tipo.

const colori = ["verde", "blu", "giallo"]

var iconeColorate = icone.map((element, index, array) => {

	if (element.type == "vegetable") {

		let obj = {
			...element,
			colore: colori[0]
		}
		return obj

	} else if (element.type == "user"){

		let obj = {
			...element,
			colore: colori[1]
		}
		return obj

	} else {

		let obj = {
			...element,
			colore: colori[2]

		}
		return obj

	}

})

iconeColorate.forEach((element, i) => {
	$("#icone2").append(`<i style="padding: 5px; font-size: 30px" class="${element.family} ${element.prefix}${element.name} ${element.colore}"></i>`)
});
