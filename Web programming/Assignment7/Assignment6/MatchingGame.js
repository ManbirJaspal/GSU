const MaximumBoardHeight = 6;
const MinimumBoardHeight = 4;
const MaximumBoardWidth = 4;
const MinimumBoardWidth = 4;
const TileState = {
    HIDDEN: 0,
    REVEALED: 1,
    MATCHED: 2
}

function MatchingGame(boardWidth, boardHeight, theme, diff) {
    boardWidth = boardWidth || 4;
    this.board;
    this.theme = theme;
    this.revealed = null;
    this.Difficulty = diff;
    this.Running = false;
    this.StartTime;
    this.EndTime;
    try {
        boardHeight = parseInt(boardHeight);
        boardWidth = parseInt(boardWidth);
    } catch(ex) {
        boardHeight = MinimumBoardHeight;
        boardWidth = MinimumBoardWidth;
    }
    boardHeight = boardHeight < MinimumBoardHeight ? MinimumBoardHeight : boardHeight;
    boardHeight = boardHeight > MaximumBoardHeight ? MaximumBoardHeight : boardHeight;
    this.boardHeight = boardHeight;
    boardWidth = boardWidth < MinimumBoardWidth ? MinimumBoardWidth : boardWidth;
    boardWidth = boardWidth > MaximumBoardWidth ? MaximumBoardWidth : boardWidth;
    this.boardWidth = boardWidth;
    this.MatchesRemaining = (boardWidth*boardHeight)/2;
    this.generateBoard();
    this.shuffleBoard();
    var counter = document.getElementById('matchCounter');
    if(counter) counter.innerHTML = this.MatchesRemaining;
}
MatchingGame.prototype.generateBoard = function() {
    var tileCount = this.boardWidth*this.boardHeight;
    this.board = [];
    for (var t = 1; t <= tileCount/2; t++) {
        this.board.push(new GameTile(t, this));
        this.board.push(new GameTile(t, this));
    }
    this.board;    
}
MatchingGame.prototype.shuffleBoard = function() {
    var i = 0;
    var j = 0;
    var temp = null;
    for (var i = this.board.length-1; i > 0; i-=1) {
        j = Math.floor(Math.random() * (i+1));
        temp = this.board[i];
        this.board[i] = this.board[j];
        this.board[j] = temp;
    }
}
MatchingGame.prototype.tileClicked = function() {
    var elapsed = document.getElementById('elapsedTime');
    var game = this;
    if( ! game.Running) {
        game.Running = true;
        game.StartTime = Date.now();
        function clockStep() {
            if(game) {
                var end;
                if(game.Running) {
                    end = Date.now();
                }
                else {
                    end = game.EndTime;
                }
                var time = new Date(end - game.StartTime);
                var h = padTime(time.getUTCHours());
                var m = padTime(time.getUTCMinutes());
                var s = padTime(time.getUTCSeconds());
                elapsed.innerHTML = h + ":" + m + ":" + s;
                if(game.Running) setTimeout(clockStep, 250);
            }
        }
        clockStep();
    }
}
MatchingGame.prototype.matchFound = function(a, b) {
    this.MatchesRemaining--;
    var counter = document.getElementById('matchCounter');
    var elapsed = document.getElementById('elapsedTime');
    if(counter) counter.innerHTML = this.MatchesRemaining;
    if(this.MatchesRemaining==0) {
        this.Running = false;
        this.EndTime = Date.now();
        var totalSeconds = (this.EndTime - this.StartTime)/1000;
        var tiles = (this.boardHeight*this.boardWidth)/2;
        if((tiles == 8 && totalSeconds<=120) || (tiles == 10 && totalSeconds<=150) || (tiles == 12 && totalSeconds<=180)) {
            window['winFlashId'] = setInterval(winFlasher, 200);
        }
    }
}
function winFlasher() {
    var elapsed = document.getElementById('elapsedTime');
    var game = window['game'];
    if(game.MatchesRemaining!=0) {
        elapsed.style.backgroundColor = '#fff';
        clearInterval(window['winFlashId']);
    }
    else {
        if(elapsed.style.backgroundColor=="rgb(214, 204, 92)") {
            elapsed.style.backgroundColor="#fff47a";
        }
        else {
            elapsed.style.backgroundColor="rgb(214, 204, 92)";
        }
    }
}
function padTime(t) {
    if (t < 10) {t = "0" + t};
    return t;
}
MatchingGame.prototype.getTileAt = function(x,y) {
    var index = x + (y*this.boardHeight);
    return this.board[index];
}
MatchingGame.prototype.getGameTableHtml = function() {
    var table = document.createElement('table');
    table.className = this.theme;
    for (var i = 0; i < this.boardHeight; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < this.boardWidth; j++) {
            var tile = this.getTileAt(i,j);
            row.appendChild(tile.HtmlElement);
        }
        table.appendChild(row);
    }
    return table;
}

var GameTile = function(num, parent) {
    this.Id = num;
    this.State = TileState.HIDDEN;
    this.GameBoard = parent;
    this.HtmlElement = this.getTileHtml();
}
GameTile.prototype.getTileHtml = function() {
    var td = document.createElement('td');
    td.classList.add('game-tile-cell');
    td.classList.add('image'+this.Id);
    td.classList.add('visible');
    
    var cover = document.createElement('div');
    cover.classList.add('game-tile-cover');
    cover.appendChild(document.createTextNode(' '));
    td.appendChild(cover);

    var t = this;
    function cellClick() {
        if( ! this.classList.contains('visible')) {
            t.GameBoard.tileClicked();
            t.HtmlElement.classList.add('visible');
            if(t.GameBoard.revealed!=null) {
                if(t.GameBoard.revealed.Id == t.Id) {
                    t.GameBoard.matchFound(t, t.GameBoard.revealed);
                } else {
                    var a = t.GameBoard.revealed;
                    var b = t;
                    setTimeout(function() {
                        a.HtmlElement.classList.remove('visible');
                        b.HtmlElement.classList.remove('visible');
                    }, 700);
                }
                t.GameBoard.revealed = null;
            } else {
                t.GameBoard.revealed = t;
            }
        }
    }
    td.addEventListener('click', cellClick);

    return td;
}

function clearAllVisible() {
    var tiles = document.getElementsByClassName('visible');
    for (var i = tiles.length-1; i >= 0; i--) {
        tiles[i].classList.remove('visible');
    }
}

var game;
var winFlashId;
window.addEventListener('load', function() {
    var theme = document.getElementById('selectTheme');
    var totalPics = document.getElementById('selectSize');
    var diff = document.getElementById('selectDifficulty');
    game = new MatchingGame(4, parseInt(totalPics.value)/2, theme.value, parseInt(diff.value)*1000);    
    var gHolder = document.getElementById('gameHolder');
    gHolder.appendChild(game.getGameTableHtml());
    setTimeout(clearAllVisible, game.Difficulty);

    document.getElementById('btnNewGame').addEventListener('click', function() {
        gHolder.innerHTML = '';
        game = new MatchingGame(4, parseInt(totalPics.value)/2, theme.value, parseInt(diff.value)*1000);
        gHolder.appendChild(game.getGameTableHtml());
        setTimeout(clearAllVisible, game.Difficulty);
    });
});