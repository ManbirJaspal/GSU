
var ConwayDemo = function() {
	
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
            if (!conway.points[coord.x][coord.y].active) {
                $(this).css("background", "yellow");
                conway.enablePoint(coord.x, coord.y);
                demoInitPoints.push(coord);
            }
        });
    }

    this.resetRecording = function() {
        conway.stop();
        conway.clear();
        $.each(demoInitPoints, function(i, val) {
            conway.enablePoint(val.x, val.y);
        });
        conway.updateDisplay();
        conway.start();
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
                conway.enablePoint(8, 9);
				conway.enablePoint(9, 9);
				conway.enablePoint(10, 9);
                break;           
            case 2:
                //pulsar
                conway.enablePoint(11, 11);
                conway.enablePoint(12, 10);
                conway.enablePoint(12, 8);
                conway.enablePoint(11, 7);
                conway.enablePoint(9, 7);
                conway.enablePoint(8, 8);
                conway.enablePoint(8, 10);
                conway.enablePoint(9, 11);
                conway.enablePoint(11, 12);
                conway.enablePoint(11, 13);
                conway.enablePoint(9, 13);
                conway.enablePoint(9, 12);
                conway.enablePoint(9, 6);
                conway.enablePoint(9, 5);
                conway.enablePoint(11, 5);
                conway.enablePoint(11, 6);
                conway.enablePoint(13, 8);
                conway.enablePoint(14, 8);
                conway.enablePoint(14, 10);
                conway.enablePoint(13, 10);
                conway.enablePoint(7, 8);
                conway.enablePoint(7, 10);
                conway.enablePoint(6, 10);
                conway.enablePoint(6, 8);
                conway.enablePoint(8, 15);
                conway.enablePoint(7, 15);
                conway.enablePoint(6, 15);
                conway.enablePoint(8, 3);
                conway.enablePoint(7, 3);
                conway.enablePoint(6, 3);
                conway.enablePoint(12, 3);
                conway.enablePoint(13, 3);
                conway.enablePoint(14, 3);
                conway.enablePoint(12, 15);
                conway.enablePoint(14, 15);
                conway.enablePoint(13, 15);
                conway.enablePoint(16, 7);
                conway.enablePoint(16, 6);
                conway.enablePoint(16, 5);
                conway.enablePoint(16, 11);
                conway.enablePoint(16, 12);
                conway.enablePoint(16, 13);
                conway.enablePoint(4, 7);
                conway.enablePoint(4, 6);
                conway.enablePoint(4, 5);
                conway.enablePoint(4, 11);
                conway.enablePoint(4, 12);
                conway.enablePoint(4, 13);
                break;
            case 3:
                //boat
                conway.enablePoint(8, 8);
                conway.enablePoint(9, 8);
                conway.enablePoint(8, 9);
                conway.enablePoint(10, 9);
                conway.enablePoint(9, 10);
                break;
            case 4:
                //glider
                conway.enablePoint(0, 0);
                conway.enablePoint(1, 1);
                conway.enablePoint(0, 2);
                conway.enablePoint(1, 2);
                conway.enablePoint(2, 1);
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
