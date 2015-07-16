$(function(){

	//which cat would you like to start with in the hero div?
	var initialCat = 0;

	var model = {
		'kittens':[
			{'name': 'Scout', 'image': 'img/kitten.jpg', 'count': 0},
			{'name': 'Archimedes', 'image': 'img/catStaircase.jpg', 'count': 0},
			{'name': 'Blue', 'image': 'img/baby.jpg', 'count': 0},
			{'name': 'Smalls', 'image': 'img/catritto.jpg', 'count': 0},
			{'name': 'Chukes', 'image': 'img/guineaPig.jpg', 'count': 0}
		]
	};


	var octopus = {
		
		getCatList: function() {
			this.catList = [];
			for  (var i = 0; i < model.kittens.length; i++) {
				this.catList.push(model.kittens[i].name);
			}
			return this.catList;
		},


		getCatImageList: function() {
			this.catImageList = [];
			for  (var i = 0; i < model.kittens.length; i++) {
				this.catImageList.push(model.kittens[i].image);
			}
			return this.catImageList;
		},


		init: function() {
			viewSidebar.init();
			octopus.makeCurrentCat();
			viewMain.init();
		},

		//invoked onclick so 'this' has specific cat information
		makeCurrentCat: function() {
			octopus.currentCat.name = model.kittens[this.index || initialCat].name;
			octopus.currentCat.index = this.index || initialCat;
			octopus.currentCat.retrieveCount = model.kittens[this.index || initialCat].count;
			octopus.currentCat.image = model.kittens[this.index || initialCat].image;

			console.log("cur cat count: " + model.kittens[this.index || initialCat].count);
		},


		"currentCat": {
			"name": this.name,
			"index": (this.index),
			"retrieveCount": model.kittens[this.index || initialCat].count,
			"image": this.image
		}, 

		storeCount: function(currentClickCount) {
			model.kittens[octopus.currentCat.index].count = currentClickCount;
			console.log("index: " + octopus.currentCat.index);
			console.log("retrieveCount: " + octopus.currentCat.retrieveCount);

		}
	};


	var viewSidebar = {

		init: function() {
			this.catList = octopus.getCatList();

			for  (var i = 0; i < this.catList.length; i++) {
				this.sideBarDiv = document.createElement('DIV');
				this.sideBarDiv.setAttribute('class', 'listDiv');

				this.sideBarName = document.createElement('H2');
				this.sideBarName.innerHTML = this.catList[i];
				this.sideBarName.index = i;
				octopus.currentCat.index = i;
				this.sideBarName.addEventListener('click', octopus.makeCurrentCat);
				this.sideBarName.addEventListener('click', viewMain.render);

				
				viewSidebar.render();
			}
		},

		render: function() {
			listArea = document.getElementById('listArea').appendChild(this.sideBarDiv);
			this.sideBarDiv.appendChild(this.sideBarName);
		}

	};


	var viewMain = {

		init: function() {

			//make div and append
			viewMain.heroCatDiv = document.createElement('DIV');
			viewMain.heroCatDiv.setAttribute('id', 'heroCatDiv');
			document.getElementById('catArea').appendChild(viewMain.heroCatDiv);

			//make headline
			viewMain.headline = document.createElement('H1');
			viewMain.headline.innerHTML = octopus.currentCat.name;
			viewMain.heroCatDiv.appendChild(viewMain.headline);

			//make image
			viewMain.image = document.createElement('IMG');
			viewMain.image.setAttribute('alt', 'cat pic');
			viewMain.image.setAttribute('class', 'catButton');
			viewMain.image.addEventListener('click', viewMain.cycleCounter);
			viewMain.image.setAttribute('src', octopus.currentCat.image);
			viewMain.heroCatDiv.appendChild(viewMain.image);

			//make counter
			viewMain.counter = document.createElement('P');
			viewMain.counter.innerHTML = octopus.currentCat.retrieveCount;
			viewMain.counter.setAttribute('id', 'counterNumber');
			viewMain.heroCatDiv.appendChild(viewMain.counter);
		},


		render: function() {
			viewMain.clearPage();

			//headline update
			viewMain.headline.innerHTML = octopus.currentCat.name;
			viewMain.heroCatDiv.appendChild(viewMain.headline);

			//image update
			viewMain.image.setAttribute('src', octopus.currentCat.image);
			viewMain.heroCatDiv.appendChild(viewMain.image);

			//run counter
			viewMain.counter.innerHTML = octopus.currentCat.retrieveCount;
			viewMain.heroCatDiv.appendChild(viewMain.counter);
		}, 


		clearPage: function() {
			document.getElementById('heroCatDiv').innerHTML = '';
			document.getElementById('heroCatDiv').img = '';
			//document.getElementById('counterNumber').innerHTML = '';
		},


		cycleCounter: function() {
			this.num = this.nextSibling.innerHTML;
			this.num++;
			this.nextSibling.innerHTML = this.num;
			
			octopus.storeCount(this.num);
		}

	};

    octopus.init();
});

