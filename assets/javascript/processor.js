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

function makePlayer1WaitNoMessage(player1Name, player2Name) {
    let containerPlayer1 = $("#player1Column");
    let player1Wait = buildPlayerWait(player1Name);    
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
    let player2Wait = buildPlayerWait (player2Name);
    $("#turnMessage").text("Waiting for " + player1Name + " to choose");
    containerPlayer2.html(player2Wait);
}

function makePlayer1ChoiceBig(player1Name, player2Name, choice) {
    let containerPlayer1 = $("#player1Column");
    let player1WaitBig = buildPlayerWaitBig (player1Name, choice);
    $("#turnMessage").text("Waiting for " + player2Name + " to choose");
    containerPlayer1.html(player1WaitBig);
}

function makePlayer2ChoiceBig(player1Name, player2Name, choice) {
    let containerPlayer2 = $("#player2Column");
    let player2WaitBig = buildPlayerWaitBig (player2Name, choice);
    $("#turnMessage").text("Waiting for " + player1Name + " to choose");
    containerPlayer2.html(player2WaitBig);
}

function identifyPlayer1Or2() {
    let playerId = $("#playerId").attr("playerNo");
    return playerId;
}

function processPlayer1Choice(choice) {
    
}