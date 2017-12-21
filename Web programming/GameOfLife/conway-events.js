
var ConwayEvents = function() {
	
	var $ = jQuery,
		t = this,
		demoInitPoints = [];
	
    this.record = function() {
        //clear grid
        conway.stop();
        conway.init($('#conway-grid')[0]);
        demoInitPoints = [];
        
        $(conway.gridNode).find('td').click(function() {
            var coord = { x: $(this)[0].parentNode.rowIndex, y: $(this)[0].cellIndex };

            //enable point
            if (!conway.cells[coord.x][coord.y].active) {
                $(this).css("background", "yellow");
                conway.enableCell(coord.x, coord.y);
                demoInitPoints.push(coord);
            }
        });
    }

    
   
    $('#conwayStart').click(function() {		    	
		conway.start($('#conwayGenerations').val());
		
    });

    $('#conwayStop').click(function() {
    	conway.stop();    	
    });

    $('#conwayPatterns').click(function() {
        
        conway.stop();
        conway.init($('#conway-grid')[0]);
		
        switch (parseInt($(this).val())) {
            case 1:
                //blinker
                conway.enableCell(8, 9);
				conway.enableCell(9, 9);
				conway.enableCell(10, 9);
                break;           
            case 2:
                //pulsar
                conway.enableCell(11, 11);
                conway.enableCell(12, 10);
                conway.enableCell(12, 8);
                conway.enableCell(11, 7);
                conway.enableCell(9, 7);
                conway.enableCell(8, 8);
                conway.enableCell(8, 10);
                conway.enableCell(9, 11);
                conway.enableCell(11, 12);
                conway.enableCell(11, 13);
                conway.enableCell(9, 13);
                conway.enableCell(9, 12);
                conway.enableCell(9, 6);
                conway.enableCell(9, 5);
                conway.enableCell(11, 5);
                conway.enableCell(11, 6);
                conway.enableCell(13, 8);
                conway.enableCell(14, 8);
                conway.enableCell(14, 10);
                conway.enableCell(13, 10);
                conway.enableCell(7, 8);
                conway.enableCell(7, 10);
                conway.enableCell(6, 10);
                conway.enableCell(6, 8);
                conway.enableCell(8, 15);
                conway.enableCell(7, 15);
                conway.enableCell(6, 15);
                conway.enableCell(8, 3);
                conway.enableCell(7, 3);
                conway.enableCell(6, 3);
                conway.enableCell(12, 3);
                conway.enableCell(13, 3);
                conway.enableCell(14, 3);
                conway.enableCell(12, 15);
                conway.enableCell(14, 15);
                conway.enableCell(13, 15);
                conway.enableCell(16, 7);
                conway.enableCell(16, 6);
                conway.enableCell(16, 5);
                conway.enableCell(16, 11);
                conway.enableCell(16, 12);
                conway.enableCell(16, 13);
                conway.enableCell(4, 7);
                conway.enableCell(4, 6);
                conway.enableCell(4, 5);
                conway.enableCell(4, 11);
                conway.enableCell(4, 12);
                conway.enableCell(4, 13);
                break;
            case 3:
                //boat
                conway.enableCell(8, 8);
                conway.enableCell(9, 8);
                conway.enableCell(8, 9);
                conway.enableCell(10, 9);
                conway.enableCell(9, 10);
                break;
            case 4:
                //glider
                conway.enableCell(0, 0);
                conway.enableCell(1, 1);
                conway.enableCell(0, 2);
                conway.enableCell(1, 2);
                conway.enableCell(2, 1);
                break;
        }
        conway.updateDisplay();
    });

    

    $('#conwayClear').click(function() {
        conway.stop();
        conway.clear();
        $('#conway-grid td').unbind('click');        
    });

    $('#conwayPlot').click(function() {
    	t.record();
    });

}
