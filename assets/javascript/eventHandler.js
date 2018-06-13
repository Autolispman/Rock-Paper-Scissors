$(document).ready(function () {
    $(document).on("click", "#startButton", function (event) {
        event.preventDefault();
        var playerName = $("#nameBox").val();        
        if (game.players.one.name === "") {
            game.players.one.name = playerName;
            setupPlayer1(game.players.one.name);            
        }
        else {            
            game.players.turn = "1";
            game.players.two.name = playerName;
            setupPlayer2(game.players.two.name);
        }
        sendGameToFireBase();
    });
});

$(window).on("beforeunload", function () {
    endGame();
});

$(document).on("click", ".playerTurnImgObject", function (event) {
    event.preventDefault();
    let choice = $(this).attr("value");
    let playerId = identifyPlayer1Or2();
    if (playerId === "1") {        
        game.players.one.choice = choice;
        game.players.two.choice = "";
        game.players.turn = "2";
        sendGameToFireBase();
    }
    else {  
        game.players.one.choice = "";      
        game.players.two.choice = choice;
        game.players.turn = "1";
        sendGameToFireBase();
    }
});