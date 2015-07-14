//cat database
var kittenList = {'kittens':[
	{'name': 'Scout', 
	'image': 'img/kitten.jpg'},

	{'name': 'Archimedes', 
	'image': 'img/catStaircase.jpg'},

	{'name': 'Blue', 
	'image': 'img/baby.jpg'},

	{'name': 'Smalls', 
	'image': 'img/catritto.jpg'},

	{'name': 'Chukes', 
	'image': 'img/guineaPig.jpg'},
]};

var staticCatList = function(kittenList) {
	for  (var i = 0; i < kittenList.kittens.length; i++) {
		//make div
		var listDiv = document.createElement('DIV');
			listDiv.setAttribute('class', 'listDiv');

		//make name
		var listName = document.createElement('H2');
		listName.innerHTML = kittenList.kittens[i].name;
		
		//store cat info to pass it to next function
		listName.name = kittenList.kittens[i].name;
		listName.image = kittenList.kittens[i].image;
		listName.addEventListener('click', clearPage)
		listName.addEventListener('click', makeClickableCat);

		//draw
		listArea = document.getElementById('listArea').appendChild(listDiv);
		listDiv.appendChild(listName);
	}
};



var makeClickableCat = function(clickableEvent) {
		//prepping DOM elements for insertion
		//DIV
		var indivCatDiv = document.createElement('DIV');
		indivCatDiv.setAttribute('class', 'indivCatDiv');

		//NAME
		var name = document.createElement('H1');
		name.innerHTML = clickableEvent.target.name;
		
		//IMAGE
		var image = document.createElement('IMG');
		image.setAttribute("src", clickableEvent.target.image);
		image.setAttribute('alt', 'cat pic');
		image.setAttribute('class', 'catButton');
		image.addEventListener('click', cycleCounter);
		
		//COUNTER
		var counter = document.createElement('P');
		counter.innerHTML = '0';
		counter.setAttribute('class', 'counterNumber');

		//append to page
		catArea = document.getElementById('catArea').appendChild(indivCatDiv);
		indivCatDiv.appendChild(name);
		indivCatDiv.appendChild(image);
		indivCatDiv.appendChild(counter);
};



//upon click, incriments counter
function cycleCounter() {
	var num = this.nextSibling.innerHTML;
	num++;
	this.nextSibling.innerHTML = num;
};


//clears page before new cat is drawn
function clearPage() {
	document.getElementById('catArea').innerHTML = '';
	document.getElementById('catArea').img = '';
};


staticCatList(kittenList);


