const hashtags = [
	"#restaurante",
	"#delivery",
	"#tecnologia",
	"#startup",
	"#food",
	"#café",
	"#fitnessfood",
	"#comidasaudável",
	"#instafood",
	"#food",
	"#hamburgueria",
	"#pizzaria",
	"#sushi",
	"#pastelaria",
	"#cookies",
	"#massas",
	"#lasanha",
	"#macarronada",
	"#comida",
	"#salgados",
	"#agendamento",
	"#compras",
	"#mercado",
	"#frango",
	"#quentinhas",
	"#marmita",
	"#galeto",
	"#coxinha",
	"#entregas",
	"#motoboys",
	"#ifood",
	"#ubereats",
	"#rappi",
	"#cardapioweb",
	"#deliverydecomida",
	"#fooddelivery",
	"#pizza",
	"#fiqueemcasa",
	"#almoço",
	"#janta",
	"#fome",
	"#pedidos",
	"#prontaentrega",
	"#agendamentos",
	"#fruta",
	"#gastronomia",
	"#chef",
	"#foodlover",
	"#familia",
	"#carne",
	"#lanche",
	"#comidadeverdade",
	"#culinaria"
]

function randomElements(items) {
	var item = items[Math.floor(Math.random() * items.length)];
	return item;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeElementFromArray(array, item) {
	const index = array.indexOf(item);
	if (index > -1) {
	  array.splice(index, 1);
	}
	return array;
}

function chooseHashtags(array) {
	var item = null;
	var newArray = array;
	var choosenHashtagsArray = [];
	for(let i = 0; i < getRandomIntInclusive(4, array.length); i++){
		item = randomElements(array);
		newArray = removeElementFromArray(array, item);
		choosenHashtagsArray.push(item);
	}

	return choosenHashtagsArray
}

console.log(chooseHashtags(hashtags).join(' '))
