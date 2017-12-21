
var Conway = function(){

	var gridSize = null,			
	cellsToFlip = [],			
	timer;						

	this.interval = 100;			
	this.gridNode = null;			

	this.cells = [];				

	
	var ConwayCell = function(x, y) {
		this.x = x;
		this.y = y;
		this.active = false;

		this.getNeighboursCount = function() {
			var neighbours = [];

			//Checkingthe boundries and getting all 8 cells around current (X) cell:
			// A B C
			// D X E
			// F G H
			if (this.x >= 1) {
				neighbours.push(conway.cells[x - 1][y]); //D
				if (this.y <= gridSize.height - 2) {
					neighbours.push(conway.cells[x - 1][y + 1]); 
				} //A
				if (this.y >= 1) { 
					neighbours.push(conway.cells[x - 1][y - 1]); 
				} //F
			}
			if (this.y >= 1) {	
				neighbours.push(conway.cells[x][y-1]); 
			} //G
			if (this.y <= gridSize.height - 2) { 
				neighbours.push(conway.cells[x][y+1]); 
			} 
			if (this.x <= gridSize.width - 2) {

				neighbours.push(conway.cells[x + 1][y]); //E
				if (this.x <= gridSize.width - 2 && this.y <= gridSize.height - 2) { 
					neighbours.push(conway.cells[x + 1][y + 1]); 
				} //C
				if (this.x <= gridSize.width - 2 && this.y >= 1) { 
					neighbours.push(conway.cells[x + 1][y - 1]); 
				} //H
			}
			//B

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
			t.flipCells();
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
				var cell = this.cells[x][y];
				this.gridNode.rows[cell.x].cells[cell.y].style.background = (cell.active) ? "#f00" : "#ccc";
			}
		}
	},

	//Activates single cell
	this.enableCell = function(x, y) {
		this.cells[x][y].active = true;
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

	//Clears game area and resets all this.cells
	this.clear = function() {
		this.cells = [];
		cellsToFlip = [];

		for (var x = 0; x < gridSize.width; x++) {
			this.cells[x] = new Array(gridSize.height);
			for (var y = 0; y < gridSize.height; y++) {
				this.cells[x][y] = new ConwayCell(x, y);
			}
		}

		this.updateDisplay();
	},

	//Changes the state of every cell of the game
	this.flipCells = function() {
		
		var aliveCell = 0;

		//clear list of this.cells to flip
		cellsToFlip = [];

		//loop through all this.cells..
		for (var x = 0; x < gridSize.width; x++) {
			for (var y = 0; y < gridSize.height; y++) {

				var cell = conway.cells[x][y];
				var neighbours = cell.getNeighboursCount();

				//..apply main game rules
				if (cell.active && neighbours < 2) {
					cellsToFlip.push({ cell: conway.cells[cell.x][cell.y], active: false });
				}
				if (cell.active && neighbours > 3) {
					cellsToFlip.push({ cell: conway.cells[cell.x][cell.y], active: false });
				}
				if (!cell.active && neighbours == 3) {
					cellsToFlip.push({ cell: conway.cells[cell.x][cell.y], active: true });
					aliveCell ++;
				}
				if (cell.active && (neighbours == 2 || neighbours == 3)) {
					cellsToFlip.push({ cell: conway.cells[cell.x][cell.y], active: true });
					aliveCell ++;
				}
			}
		}
		
		$('#alivecell').html('No. of alive cells : ' + aliveCell);

		for (var i = 0; i <= cellsToFlip.length - 1; i++) {
			cellsToFlip[i].cell.active = cellsToFlip[i].active;			
		}
		this.updateDisplay();
	}
}
