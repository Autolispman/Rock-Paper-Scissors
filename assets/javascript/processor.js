function setupPlayer(playerName) {    
    if (game.players.one.name === "") {
        game.players.one.name = playerName;
        setupPlayer1(game.players.one.name);
    }
    else {
        game.players.turn = "1";
        game.players.two.name = playerName;
        setupPlayer2(game.players.two.name);
    }
}

function setupPlayer1(playerName) {
    $("#messageCenter").html(buildInfoMessagePlayer1(playerName));
}

function setupPlayer2(playerName) {
    $("#messageCenter").html(buildInfoMessagePlayer2(playerName));
}

function makePlayer1Turn(playerName) {
    let containerPlayer1 = $("#player1Column");
    let player1Turn = buildPlayerTurn(playerName);
    $("#turnMessage").text("It's your turn!");
    containerPlayer1.html(player1Turn);
}

function makePlayer1TurnNoObj(playerName) {
    let containerPlayer1 = $("#player1Column");
    let player1Turn = buildPlayerTurnNoObj(playerName);
    containerPlayer1.html(player1Turn);
}

function makePlayer1Wait(player1Name, player2Name) {
    let containerPlayer1 = $("#player1Column");
    let player1Wait = buildPlayerWait(player1Name);
    $("#turnMessage").text("Waiting for " + player2Name + " to choose");
    containerPlayer1.html(player1Wait);
}

function makePlayer1WaitNoMessage(player1Name) {
    let containerPlayer1 = $("#player1Column");
    let player1Wait = buildPlayerWait(player1Name);
    $("#turnMessage").text("");
    containerPlayer1.html(player1Wait);
}

function makePlayer2Turn(playerName) {
    let containerPlayer2 = $("#player2Column");
    let player2Turn = buildPlayerTurn(playerName);
    $("#turnMessage").text("It's your turn!");
    containerPlayer2.html(player2Turn);
}

function makePlayer2TurnNoObj(playerName) {
    let containerPlayer2 = $("#player2Column");
    let player2Turn = buildPlayerTurnNoObj(playerName);
    containerPlayer2.html(player2Turn);
}

function makePlayer2Wait(player1Name, player2Name) {
    let containerPlayer2 = $("#player2Column");
    let player2Wait = buildPlayerWait(player2Name);
    $("#turnMessage").text("Waiting for " + player1Name + " to choose");
    containerPlayer2.html(player2Wait);
}

function makePlayer2WaitNoMessage(player2Name) {
    let containerPlayer2 = $("#player2Column");
    let player2Wait = buildPlayerWait(player2Name);
    $("#turnMessage").text("");
    containerPlayer2.html(player2Wait);
}

function makePlayer1ChoiceBig(player1Name, player2Name, choice) {
    let containerPlayer1 = $("#player1Column");
    let player1WaitBig = buildPlayerWaitBig(player1Name, choice);
    $("#turnMessage").text("Waiting for " + player2Name + " to choose");
    containerPlayer1.html(player1WaitBig);
}

function makePlayer2ChoiceBig(player1Name, player2Name, choice) {
    let containerPlayer2 = $("#player2Column");
    let player2WaitBig = buildPlayerWaitBig(player2Name, choice);
    $("#turnMessage").text("Waiting for " + player1Name + " to choose");
    containerPlayer2.html(player2WaitBig);
}

function identifyPlayer1Or2() {
    let playerId = $("#playerId").attr("playerNo");
    return playerId;
}

function showWinner() {
    let winner = calculateWinner();
    let winnerContainer = $("#outComeColumn");
    let winnerHtml = buildWinner(winner);
    winnerContainer.html(winnerHtml);
    $("#turnMessage").text("Winner Revealed");
    setTimeout(setUpNewGame, 4000);
}

function setUpNewGame() {
    $("#winnerBig").text("");
    game.players.turn = "1";
    game.players.one.choice = "";
    game.players.two.choice = "";
    sendGameToFireBase();
}

function calculateWinner() {
    let combonations = ["RockRock", "RockPaper", "RockScissors", "PaperRock", "PaperPaper", "PaperScissors", "ScissorsRock", "ScissorsPaper", "ScissorsScissors"]
    let choices = game.players.one.choice + game.players.two.choice;
    let index = combonations.indexOf(choices);
    switch (index) {
        case 0:
            return "Tie Game";
        case 1:
            player2WinsPlusPlus();
            player1LossesPlusPlus();
            return game.players.two.name + " Wins";
        case 2:
            player1WinsPlusPlus();
            player2LossesPlusPlus();
            return game.players.one.name + " Wins";
        case 3:
            player1WinsPlusPlus();
            player2LossesPlusPlus();
            return game.players.one.name + " Wins";
        case 4:
            return "Tie Game";
        case 5:
            player2WinsPlusPlus();
            player1LossesPlusPlus();
            return game.players.two.name + " Wins";
        case 6:
            player2WinsPlusPlus();
            player1LossesPlusPlus();
            return game.players.two.name + " Wins";
        case 7:
            player1WinsPlusPlus();
            player2LossesPlusPlus();
            return game.players.one.name + " Wins";
        case 8:
            return "Tie Game";
    }
}

function player1WinsPlusPlus() {
    game.players.one.wins = (parseInt(game.players.one.wins) + 1).toString();
}

function player1LossesPlusPlus() {
    game.players.one.losses = (parseInt(game.players.one.losses) + 1).toString();
}

function player2WinsPlusPlus() {
    game.players.two.wins = (parseInt(game.players.two.wins) + 1).toString();
}

function player2LossesPlusPlus() {
    game.players.two.losses = (parseInt(game.players.two.losses) + 1).toString();
}

function updatePlayer1Messages() {
    let chatterBoxText = $("#chatterBoxTextId");
    let messageArray = game.players.one.messages.split("\r");
    chatterBoxText.empty();
    for (let i = 0; i < messageArray.length; i++) {
        if (messageArray[i] !== "") {
            let p = $("<p>");
            let mesSplit = messageArray[i].split(":");
            if (mesSplit[0] === game.players.one.name) {
                p.addClass("playerMessage1");
                p.text(messageArray[i]);
                chatterBoxText.append(p);
            }
            else {
                p.addClass("playerMessage2");
                p.text(messageArray[i]);
                chatterBoxText.append(p);
            }
        }
    }
    document.getElementById("chatterBoxTextId").scrollTop = document.getElementById("chatterBoxTextId").scrollHeight;
    //chatterBoxText.scrollTop = chatterBoxText.scrollHeight;
}

function updatePlayer2Messages() {
    let chatterBoxText = $("#chatterBoxTextId");
    let messageArray = game.players.two.messages.split("\r");
    chatterBoxText.empty();
    for (let i = 0; i < messageArray.length; i++) {
        if (messageArray[i] !== "") {
            let p = $("<p>");
            let mesSplit = messageArray[i].split(":");
            if (mesSplit[0] === game.players.two.name) {
                p.addClass("playerMessage1");
                p.text(messageArray[i]);
                chatterBoxText.append(p);
            }
            else {
                p.addClass("playerMessage2");
                p.text(messageArray[i]);
                chatterBoxText.append(p);
            }
        }
    }
    document.getElementById("chatterBoxTextId").scrollTop = document.getElementById("chatterBoxTextId").scrollHeight;
    //chatterBoxText.scrollTop = chatterBoxText.scrollHeight;
}

function makeWaitForPlayer1() {
    let playerWait = buildWaitForPlayer("1")
    $("#player1Column").html(playerWait);
}

function makeWaitForPlayer2() {
    let playerWait = buildWaitForPlayer("2")
    $("#player2Column").html(playerWait);
}

function determinePlayerNo() {

}
