$(function(){

	var model = {
		'kittens':[
			{'name': 'Scout', 'image': 'img/kitten.jpg'},
			{'name': 'Archimedes', 'image': 'img/catStaircase.jpg'},
			{'name': 'Blue', 'image': 'img/baby.jpg'},
			{'name': 'Smalls', 'image': 'img/catritto.jpg'},
			{'name': 'Chukes', 'image': 'img/guineaPig.jpg'},
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


		getImage: function() {
			this.catImageList = octopus.getCatImageList();
			viewMain.render.image = this.catImageList[this.index];
		},


		getName: function() {
			viewMain.render.headline = this.innerHTML;
		},


		init: function() {
			//model.init();
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

		},


		render: function() {
			this.clickEvent = this;
			viewMain.clearPage();

			viewMain.div();
			viewMain.headlineTop();
			viewMain.imageLarge();
			viewMain.counterBottom();

			//append to page
			this.catArea = document.getElementById('catArea').appendChild(viewMain.heroCatDiv);
			viewMain.heroCatDiv.appendChild(viewMain.headline);
			viewMain.heroCatDiv.appendChild(viewMain.image);
			viewMain.heroCatDiv.appendChild(viewMain.counter);
		}, 


		div: function() {
			this.heroCatDiv = document.createElement('DIV');
			this.heroCatDiv.setAttribute('class', 'heroCatDiv');
		},


		headlineTop: function() {
			this.headline = document.createElement('H1');
			this.headline.innerHTML = viewMain.render.headline;
		},


		imageLarge: function() {
			this.image = document.createElement('IMG');
			this.image.setAttribute('src', viewMain.render.image);
			this.image.setAttribute('alt', 'cat pic');
			this.image.setAttribute('class', 'catButton');
			this.image.addEventListener('click', viewMain.cycleCounter);
		},


		counterBottom: function() {
			this.counter = document.createElement('P');
			this.counter.innerHTML = '0';
			this.counter.setAttribute('class', 'counterNumber');
		},


		clearPage: function() {
			document.getElementById('catArea').innerHTML = '';
			document.getElementById('catArea').img = '';
		},


		cycleCounter: function() {
			this.num = this.nextSibling.innerHTML;
			this.num++;
			this.nextSibling.innerHTML = this.num;
		}

	};

    octopus.init();
});

