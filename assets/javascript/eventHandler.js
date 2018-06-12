$(document).ready(function () {
    $(document).on("click", "#startButton", function () {
        var playerName = $("#nameBox").val();
        setPlayer(playerName);
        sendGameToFireBase();
        if(game.players.two.name === "") {
            setupPlayer1(game.players.one.name);
        }
        else {
            setupPlayer2(game.players.two.name);
        }        
    });
});

$(window).on("beforeunload", function() {
    endGame();
});