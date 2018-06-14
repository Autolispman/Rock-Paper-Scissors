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
    let playerId = identifyPlayer1Or2();
    if (playerId === "1") {
        game.players.two.messages = game.players.two.messages + game.players.one.name + " has left the game\r";
        game.players.one.choice = "";
        game.players.one.losses = "0";
        game.players.one.name = "";
        game.players.one.wins = "0";
        game.players.one.messages = "";
        game.players.two.choice = "";
        game.players.turn = "";
        if (game.players.two.name === "") {
            endGame();
        }
        else {
            sendGameToFireBase();
        }
    }
    else {
        game.players.one.messages = game.players.one.messages + game.players.two.name + " has left the game\r";
        game.players.two.choice = "";
        game.players.two.losses = "0";
        game.players.two.name = "";
        game.players.two.wins = "0";
        game.players.two.messages = "";
        game.players.one.choice = "";
        game.players.turn = "";
        if (game.players.one.name === "") {
            endGame();
        }
        else {
            sendGameToFireBase();
        }
    }
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
        game.players.two.choice = choice;
        game.players.turn = "1";
        sendGameToFireBase();
    }
});

$(document).on("click", "#chatSendButton", function (event) {
    event.preventDefault();
    let message = $("#chatMessageInput").val().trim();
    let playerId = identifyPlayer1Or2();
    if (message !== "") {
        if (playerId === "1") {
            game.players.one.messages = game.players.one.messages + game.players.one.name + ": " + message + "\r";
            game.players.two.messages = game.players.two.messages + game.players.one.name + ": " + message + "\r";
            sendGameToFireBase();
        }
        else {
            game.players.one.messages = game.players.one.messages + game.players.two.name + ": " + message + "\r";
            game.players.two.messages = game.players.two.messages + game.players.two.name + ": " + message + "\r";
            sendGameToFireBase();
        }
    }
    $("#chatMessageInput").val("")
});

