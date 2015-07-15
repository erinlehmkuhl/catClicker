$(function(){

	var model = {
		'kittens':[
			{'name': 'Scout', 'image': 'img/kitten.jpg', 'counter': 0},
			{'name': 'Archimedes', 'image': 'img/catStaircase.jpg', 'counter': 0},
			{'name': 'Blue', 'image': 'img/baby.jpg', 'counter': 0},
			{'name': 'Smalls', 'image': 'img/catritto.jpg', 'counter': 0},
			{'name': 'Chukes', 'image': 'img/guineaPig.jpg', 'counter': 0}
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


		getImage: function() {//for clicked cat
			this.catImageList = octopus.getCatImageList();
			viewMain.render.image = this.catImageList[this.index];
		},


		getName: function() {//for clicked cat
			viewMain.render.headline = this.innerHTML;
		},


		init: function() {
			viewMain.init();
			viewSidebar.init();
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
				this.sideBarName.addEventListener('click', octopus.getName);
				this.sideBarName.addEventListener('click', octopus.getImage);
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
			var initialCat = 0;
			viewMain.div();
			viewMain.headlineTop(initialCat);
			viewMain.imageLarge(initialCat);
			viewMain.counterBottom();
			
			//append to page
			document.getElementById('catArea').appendChild(viewMain.heroCatDiv);
			viewMain.heroCatDiv.appendChild(viewMain.headline);
			viewMain.heroCatDiv.appendChild(viewMain.image);
			viewMain.heroCatDiv.appendChild(viewMain.counter);
		},


		render: function() {
			this.clickEvent = this;
			viewMain.clearPage();

			//viewMain.div();
			viewMain.headlineTop();
			viewMain.imageLarge();
			viewMain.counterBottom();

			//append to page
			viewMain.heroCatDiv.appendChild(viewMain.headline);
			viewMain.heroCatDiv.appendChild(viewMain.image);
			viewMain.heroCatDiv.appendChild(viewMain.counter);
		}, 


		div: function() {
			this.heroCatDiv = document.createElement('DIV');
			this.heroCatDiv.setAttribute('id', 'heroCatDiv');
		},


		headlineTop: function(initialCat) {
			this.headline = document.createElement('H1');
			if (initialCat > -1) {
				var catList = octopus.getCatList();
				var cat = catList[initialCat];
				this.headline.innerHTML = cat;
			}else {
				this.headline.innerHTML = viewMain.render.headline;
			}
			
		},


		imageLarge: function(initialCat) {
			this.image = document.createElement('IMG');
			this.image.setAttribute('alt', 'cat pic');
			this.image.setAttribute('class', 'catButton');
			this.image.addEventListener('click', viewMain.cycleCounter);
			if (initialCat > -1) {
				var catImageList = octopus.getCatImageList();
				var cat = catImageList[initialCat];
				this.image.setAttribute('src', cat);
			}else {
				this.image.setAttribute('src', viewMain.render.image);
			}
		},


		counterBottom: function() {
			this.counter = document.createElement('P');
			this.counter.innerHTML = '0';
			this.counter.setAttribute('class', 'counterNumber');
		},


		clearPage: function() {
			document.getElementById('heroCatDiv').innerHTML = '';
			document.getElementById('heroCatDiv').img = '';
		},


		cycleCounter: function() {
			this.num = this.nextSibling.innerHTML;
			this.num++;
			this.nextSibling.innerHTML = this.num;
		}

	};

    octopus.init();
});

