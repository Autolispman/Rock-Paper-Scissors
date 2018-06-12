function buildPreGameElements(divContainer) {
    let entryInput = buildNameEntryBlock();
    let playerRow = $("<div>");
    let player1Col = $("<div>");
    let player1Div = buildWaitForPlayer("1");
    let outComeCol = $("<div>");
    let outComeInfo = buildOutComeEmpty();
    let player2Col = $("<div>");
    let player2Div = buildWaitForPlayer("2");
    let chatWindow = buildChat();
    player1Div.attr("id", "player1");
    playerRow.addClass("row rowCustom");
    player1Col.attr("id", "player1Column");
    player1Col.addClass("col-lg-4 col-md-4 col-sm-12 col-xs-12")
    player1Col.append(player1Div);
    outComeCol.attr("id", "outComeColumn");
    outComeCol.addClass("col-lg-4 col-md-4 col-sm-12 col-xs-12");
    outComeCol.append(outComeInfo);
    player2Col.attr("id", "player2Column");
    player2Col.addClass("col-lg-4 col-md-4 col-sm-12 col-xs-12");
    player2Col.append(player2Div);
    playerRow.append(player1Col).append(outComeCol).append(player2Col);
    divContainer.append(entryInput).append(playerRow).append(chatWindow);
}

function setupPlayer1(playerName) {
    $("#messageCenter").html(buildInfoMessagePlayer1(playerName));
    //$("#player1Column").html(buildPlayerWait(playerName));
    //addTurnIndicator();
}

function setupPlayer2(playerName) {
    $("#messageCenter").html(buildInfoMessagePlayer2(playerName));
    //$("#player2Column").html(buildPlayerWait(playerName));
    //addTurnIndicator();
}

// function addTurnIndicator() {
//     let turnMessageDiv = $("<div>");
//     let turnMessageSpan = $("<span>");
//     turnMessageSpan.attr("id", "turnMessage");
//     turnMessageDiv.addClass("entryDiv playerText playerTextName");
//     turnMessageDiv.append(turnMessageSpan);
//     $("#messageCenter").append(turnMessageDiv);
// }

function makePlayer1Turn(playerName) {
    let containerPlayer1 = $("#player1Column");
    let player1Turn = buildPlayerTurn(playerName);
    $("#turnMessage").text("It's your turn!");
    containerPlayer1.html(player1Turn);    
}

function makePlayer1Wait(player1Name, player2Name) {
    let containerPlayer1 = $("#player1Column");
    let player1Wait = buildPlayerWait(player1Name);    
    $("#turnMessage").text("Waiting on " + player2Name);
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
    containerPlayer2.html(player2Wait);
}

function makePlayer2Wait(player1Name, player2Name) {
    let containerPlayer2 = $("#player2Column");
    let player2Wait = buildPlayerWait (player2Name);
    $("#turnMessage").text("Waiting on " + player1Name);
    containerPlayer2.html(player2Wait);
}

// function buildTurnElements(divContainer) {
//     let entryInput = buildNameEntryBlock();
//     let playerRow = $("<div>");
//     let player1Col = $("<div>");
//     let player1Div = buildPlayerTurn("Dan");
//     let outComeCol = $("<div>");
//     let outComeInfo = buildOutComeEmpty();
//     let player2Col = $("<div>");
//     let player2Div = buildPlayerWait("George");
//     let chatWindow = buildChat();
//     playerRow.addClass("row rowCustom");
//     player1Col.addClass("col-lg-4 col-md-4 col-sm-12 col-xs-12")
//     player1Col.append(player1Div);
//     outComeCol.addClass("col-lg-4 col-md-4 col-sm-12 col-xs-12");
//     outComeCol.append(outComeInfo);
//     player2Col.addClass("col-lg-4 col-md-4 col-sm-12 col-xs-12");
//     player2Col.append(player2Div);
//     playerRow.append(player1Col).append(outComeCol).append(player2Col);
//     divContainer.append(entryInput).append(playerRow).append(chatWindow);
// }

function buildNameEntryBlock() {
    let entryRowDiv = $("<div>");
    let entryDiv = $("<div>");
    let entryContainer = $("<div>")
    let nameBox = $("<input>");
    let startButton = $("<button>");

    let infoMesDiv = $("<div>");
    let infoMesSpan = $("<p>");
    let infoMesSpanId = $("<p>");
    let turnMessageSpan = $("<p>");

    entryRowDiv.addClass("row");
    entryDiv.attr("id", "messageCenter")
    entryDiv.addClass("col-12");
    entryContainer.attr("id", "entryContainer");
    entryContainer.addClass("entryDiv")
    nameBox.attr("id", "nameBox").attr("placeholder", "Name").attr("type", "text");
    nameBox.addClass("nameBox");
    startButton.text("Start");
    startButton.attr("id", "startButton");

    infoMesDiv.attr("id", "infoMessageDiv").attr("display", "none");
    infoMesDiv.addClass("entryDiv playerText playerTextName");
    infoMesSpan.attr("id", "infoMessageSpan");
    infoMesSpanId.attr("id", "playerId").attr("display", "none").attr("playerNo", "?");
    turnMessageSpan.attr("id", "turnMessage");
    infoMesDiv.append(infoMesSpan).append(infoMesSpanId).append(turnMessageSpan);

    entryContainer.append(nameBox).append(startButton);
    entryDiv.append(entryContainer).append(infoMesDiv);
    entryRowDiv.append(entryDiv);

    return entryRowDiv;

    
    


}

function buildWaitForPlayer(playerNo) {
    let player = $("<div>");
    player.addClass("plainBorder playerText playerTextName");
    player.text("Waiting for player " + playerNo);
    return player;
}

function buildPlayerTurn(playerName) {
    let player = $("<div>");
    let nameRow = $("<div>");
    let name = $("<span>");
    let rockRow = $("<div>");
    let rock = $("<a>");
    let rockImg = $("<img>");
    let rockSpan = $("<span>");
    let paperRow = $("<div>");
    let paper = $("<a>");
    let paperImg = $("<img>");
    let paperSpan = $("<span>")
    let scissorsRow = $("<div>");
    let scissors = $("<a>");
    let scissorsImg = $("<img>");
    let scissorsSpan = $("<span>");
    let winsLossesRow = $("<div>");
    let winsLosses = buildWinsLosses();
    player.addClass("playerTurn");
    name.text(playerName);
    name.addClass("playerText playerTextName");
    nameRow.append(name);

    rockImg.attr("src", "assets/images/rock.png").attr("href", "#");
    rockImg.addClass("playerTurnImgObject")
    rockSpan.text("Rock");
    rock.addClass("playerText playerTurnTextObject");
    rock.append(rockImg).append(rockSpan);
    rockRow.append(rock);

    paperImg.attr("src", "assets/images/paper.jpg").attr("href", "#");
    paperImg.addClass("playerTurnImgObject")
    paperSpan.text("Paper");
    paper.addClass("playerText playerTurnTextObject");
    paper.append(paperImg).append(paperSpan);
    paperRow.append(paper);

    scissorsImg.attr("src", "assets/images/scissors.jpg").attr("href", "#");
    scissorsImg.addClass("playerTurnImgObject");
    scissorsSpan.text("Scissors");
    scissors.addClass("playerText playerTurnTextObject");
    scissors.append(scissorsImg).append(scissorsSpan);
    scissorsRow.append(scissors);

    winsLosses.addClass("playerText playerTurnTextWinLoss");
    winsLossesRow.append(winsLosses);
    player.append(nameRow).append(rockRow).append(paperRow).append(scissorsRow).append(winsLossesRow);
    return player;
}

function buildOutComeEmpty() {
    let emptyDiv = $("<div>");
    emptyDiv.addClass("plainBorder")
    return emptyDiv;
}

function buildPlayerWait(playerName) {
    let player = $("<div>");
    let nameRow = $("<div>");
    let name = $("<span>");
    let winsLossesRow = $("<div>");
    let winsLosses = buildWinsLosses(playerName);
    player.addClass("plainBorder");
    name.text(playerName);
    name.addClass("playerText playerTextName");
    nameRow.append(name);
    winsLossesRow.addClass("waitWinsLosses");
    winsLossesRow.append(winsLosses);
    player.append(nameRow).append(winsLossesRow);
    return player;
}

function buildWinsLosses(playerName) {
    let winsLossesSpan = $("<span>");
    winsLossesSpan.text("Wins: " + "" + "Losses: " + "");
    return winsLossesSpan;
}

function buildChat() {
    let chatDivRow = $("<div>");
    let chatDivCol1 = $("<div>");
    let chatDivContainer = $("<div>");
    let chatDivRowSub1 = $("<div>");
    let chatDivColSub1 = $("<div>");
    let chatText = $("<textarea>");

    let chatDivRowSub2 = $("<div>");
    let chatDivColSub2 = $("<div>");

    let inputMessage = $("<input>");
    let sendButton = $("<button>");

    chatText.addClass("chatTextArea");
    inputMessage.addClass("chatMessage");
    sendButton.addClass("chatSend");

    chatDivRow.addClass("row");
    chatDivCol1.addClass("col-12");
    chatDivRowSub1.addClass("row");
    chatDivColSub1.addClass("col-12");
    chatDivColSub1.append(chatText);

    chatDivRowSub2.addClass("row");
    chatDivColSub2.addClass("col-12");
    sendButton.text("Send");
    chatDivColSub2.append(inputMessage).append(sendButton);

    chatDivContainer.addClass("chatWindow");
    chatDivRowSub1.append(chatDivColSub1);
    chatDivRowSub2.append(chatDivColSub2);
    chatDivContainer.append(chatDivRowSub1).append(chatDivRowSub2);
    chatDivCol1.append(chatDivContainer);
    chatDivRow.append(chatDivCol1);
    return chatDivRow;
}

function buildInfoMessagePlayer1(playerName) {
    //let messageCenter = $("#messageCenter");
    let entryContainer = $("#entryContainer");
    let infoMessageDiv = $("#infoMessageDiv");
    let infoMesSpan = $("#infoMessageSpan");
    let infoMesSpanId = $("#playerId");
    //messageCenter.remove(entryContainer);
    entryContainer.remove();
    infoMessageDiv.attr("display", "visible");    
    infoMesSpan.text("Hi " + playerName + "! Your are player 1");    
    infoMesSpanId.attr("playerNo", "1");
}

function buildInfoMessagePlayer2(playerName) {
    //let messageCenter = $("#messageCenter");
    let entryContainer = $("#entryContainer");
    let infoMessageDiv = $("#infoMessageDiv");
    let infoMesSpan = $("#infoMessageSpan");
    let infoMesSpanId = $("#playerId");
    //messageCenter.remove(entryContainer);
    entryContainer.remove();
    infoMessageDiv.attr("display", "visible");    
    infoMesSpan.text("Hi " + playerName + "! Your are player 2");
    infoMesSpanId.attr("playerNo", "2");
}

let container = $("#gameContainer");
buildPreGameElements(container);