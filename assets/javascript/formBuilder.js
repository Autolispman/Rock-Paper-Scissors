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

    rockImg.attr("src", "assets/images/rock.png").attr("value", "Rock");
    rockImg.addClass("playerTurnImgObject")
    rockSpan.text("Rock");
    rock.addClass("playerText playerTurnTextObject");
    rock.attr("href", "#");
    rock.append(rockImg).append(rockSpan);
    rockRow.append(rock);

    paperImg.attr("src", "assets/images/paper.jpg").attr("value", "Paper");
    paperImg.addClass("playerTurnImgObject")
    paperSpan.text("Paper");
    paper.addClass("playerText playerTurnTextObject");
    paper.attr("href", "#");
    paper.append(paperImg).append(paperSpan);
    paperRow.append(paper);

    scissorsImg.attr("src", "assets/images/scissors.jpg").attr("value", "Scissors");
    scissorsImg.addClass("playerTurnImgObject");
    scissorsSpan.text("Scissors");
    scissors.addClass("playerText playerTurnTextObject");
    scissors.attr("href", "#")
    scissors.append(scissorsImg).append(scissorsSpan);
    scissorsRow.append(scissors);

    winsLosses.addClass("playerText playerTurnTextWinLoss");
    winsLossesRow.append(winsLosses);
    player.append(nameRow).append(rockRow).append(paperRow).append(scissorsRow).append(winsLossesRow);
    return player;
}

function buildPlayerTurnNoObj(playerName) {
    let player = $("<div>");
    let nameRow = $("<div>");
    let name = $("<span>");
    let winsLossesRow = $("<div>");
    let winsLosses = buildWinsLosses();
    player.addClass("playerTurn");
    name.text(playerName);
    name.addClass("playerText playerTextName");
    nameRow.append(name);
    winsLosses.addClass("playerText");
    winsLossesRow.addClass("waitWinsLosses");
    winsLossesRow.append(winsLosses);
    player.append(nameRow).append(winsLossesRow);
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

function buildPlayerWaitBig(playerName, choice) {
    let player = $("<div>");
    let nameRow = $("<div>");
    let name = $("<span>");
    let choiceBig = $("<span>");
    let choiceBigRow = $("<div>");
    let winsLossesRow = $("<div>");
    let winsLosses = buildWinsLosses(playerName);
    player.addClass("plainBorder");
    name.text(playerName);
    name.addClass("playerText playerTextName");
    nameRow.append(name);
    choiceBig.text(choice);
    choiceBigRow.addClass("choiceBig");
    choiceBigRow.append(choiceBig);
    winsLossesRow.addClass("waitWinsLossesChoiceBig");
    winsLossesRow.append(winsLosses);
    player.append(nameRow).append(choiceBigRow).append(winsLossesRow);
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
    infoMesSpan.text("Hi " + playerName + "! Your are Player 1");
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
    infoMesSpan.text("Hi " + playerName + "! Your are Player 2");
    infoMesSpanId.attr("playerNo", "2");
}

function buildWinner(winner) {
    let player = $("<div>");    
    let winnerBig = $("<span>");
    let winnerBigRow = $("<div>");   
    player.addClass("plainBorder");
    winnerBig.attr("id", "winnerBig");
    winnerBig.text(winner);
    winnerBigRow.addClass("choiceBig");
    winnerBigRow.append(winnerBig);    
    player.append(winnerBigRow);
    return player;
}

let container = $("#gameContainer");
buildPreGameElements(container);