
var Conway = function(){

	var gridSize = null,			//size of the game area
	pointsToFlip = [],			//Collection of this.points to flip in the next iteraton
	timer;						//Game Loop timer

	this.interval = 100;			//update interval
	this.gridNode = null;			//reference to table node

	this.points = [];				//all this.points

	//Main Cell Object
	var ConwayPoint = function(x, y) {
		this.x = x;
		this.y = y;
		this.active = false;

		this.neighbours = function() {
			var neighbours = [];

			//Checkingthe boundries and getting all 8 cells around current (X) cell:
			// ABC
			// DXE
			// FGH
			if (this.x >= 1) {
				neighbours.push(conway.points[x - 1][y]); //D
				if (this.y <= gridSize.height - 2) {
					neighbours.push(conway.points[x - 1][y + 1]); 
				} //A
				if (this.y >= 1) { 
					neighbours.push(conway.points[x - 1][y - 1]); 
				} //F
			}
			if (this.x <= gridSize.width - 2) {

				neighbours.push(conway.points[x + 1][y]); //E
				if (this.x <= gridSize.width - 2 && this.y <= gridSize.height - 2) { 
					neighbours.push(conway.points[x + 1][y + 1]); 
				} //C
				if (this.x <= gridSize.width - 2 && this.y >= 1) { 
					neighbours.push(conway.points[x + 1][y - 1]); 
				} //H
			}
			if (this.y >= 1) {	
				neighbours.push(conway.points[x][y-1]); 
			} //G
			if (this.y <= gridSize.height - 2) { 
				neighbours.push(conway.points[x][y+1]); 
			} //B

			var count = 0;
			for (var i = 0; i < neighbours.length; i++) {

				if (neighbours[i] != undefined && neighbours[i].active)
				{
					count++;
				}
			}

			return count;
		}
	}

	//Starts Game Loop
	this.start = function(generation) {
		var timesRun = 0;
		clearInterval(timer);
		var t = this;				
		timer = setInterval(function(){
			timesRun += 1;
			$('#generation').html('No. of generations : ' + timesRun);
			if(timesRun == generation){				
				clearInterval(timer);
			}
			t.flipPoints();
		}, this.interval);	
	},

	//Stops Game Loop
	this.stop = function() {
		clearInterval(timer);
	},

	//Updates cells display in front-end
	this.updateDisplay = function() {
		for (var x = 0; x <= gridSize.width - 1; x++) {
			for (var y = 0; y <= gridSize.height - 1; y++) {
				var point = this.points[x][y];
				this.gridNode.rows[point.x].cells[point.y].style.background = (point.active) ? "#f00" : "#ccc";
			}
		}
	},

	//Activates single point
	this.enablePoint = function(x, y) {
		this.points[x][y].active = true;
	},

	//Initializes the game
	this.init = function(gridNode) {
		this.gridNode = gridNode;
		gridSize = {
				width: this.gridNode.rows.length,
				height: this.gridNode.rows[0].cells.length
		};

		this.clear();
	},

	//Clears game area and resets all this.points
	this.clear = function() {
		this.points = [];
		pointsToFlip = [];

		for (var x = 0; x < gridSize.width; x++) {
			this.points[x] = new Array(gridSize.height);
			for (var y = 0; y < gridSize.height; y++) {
				this.points[x][y] = new ConwayPoint(x, y);
			}
		}

		this.updateDisplay();
	},

	//Changes the state of every point of the game
	this.flipPoints = function() {
		
		var aliveCell = 0;

		//clear list of this.points to flip
		pointsToFlip = [];

		//loop through all this.points..
		for (var x = 0; x < gridSize.width; x++) {
			for (var y = 0; y < gridSize.height; y++) {

				var point = conway.points[x][y];
				var neighbours = point.neighbours();

				//..apply main game rules
				if (point.active && neighbours < 2) {
					pointsToFlip.push({ point: conway.points[point.x][point.y], active: false });
				}
				if (point.active && neighbours > 3) {
					pointsToFlip.push({ point: conway.points[point.x][point.y], active: false });
				}
				if (!point.active && neighbours == 3) {
					pointsToFlip.push({ point: conway.points[point.x][point.y], active: true });
					aliveCell ++;
				}
				if (point.active && (neighbours == 2 || neighbours == 3)) {
					pointsToFlip.push({ point: conway.points[point.x][point.y], active: true });
					aliveCell ++;
				}
			}
		}
		
		$('#alivecell').html('No. of alive cells : ' + aliveCell);

		for (var i = 0; i <= pointsToFlip.length - 1; i++) {
			pointsToFlip[i].point.active = pointsToFlip[i].active;			
		}
		this.updateDisplay();
	}
}
