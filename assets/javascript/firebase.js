
// Initialize Firebase
let config = {
    apiKey: "AIzaSyAyDBJpunnrRUyQrcoyOgZ98v0GN0APZdo",
    authDomain: "rockpaperscissors-50668.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-50668.firebaseio.com",
    projectId: "rockpaperscissors-50668",
    storageBucket: "rockpaperscissors-50668.appspot.com",
    messagingSenderId: "1082988492674"
};

firebase.initializeApp(config);

let game = {
    players: {
        one: {
            choice: "",
            losses: "0",
            messages: "",
            name: "",
            wins: "0"
        },
        two: {
            choice: "",
            losses: "0",
            messages: "",
            name: "",
            wins: "0"
        },
        turn: ""
    }
}

function sendGameToFireBase() {
    firebase.database().ref().set(game);
}

function endGame() {
    game.players.one.choice = "";
    game.players.one.losses = "0";
    game.players.one.messages = "";
    game.players.one.name = "";
    game.players.one.wins = "0";
    game.players.two.choice = "";
    game.players.two.losses = "0";
    game.players.two.messages = "";
    game.players.two.name = "";
    game.players.two.wins = "0";
    game.players.turn = "";
    firebase.database().ref().child("players").remove();
}

firebase.database().ref().on("value", function (snapshot) {
    //console.log(snapshot.val());
    if (snapshot.val() === null) {
        let container = $("#gameContainer");
        endGame();
        container.empty();
        buildPreGameElements(container);
    }
    else {
        game = snapshot.val();
        let playerNo = $("#playerId").attr("playerNo");
        if (playerNo === "1") {
            updatePlayer1Messages();
        }
        else {
            if (playerNo === "2") {
                updatePlayer2Messages();
            }
        }
        if (game.players.one.name !== "" && game.players.two.name === "" && game.players.turn === "") {
            console.log(1);
            if (playerNo === "1") {
                makePlayer1WaitNoMessage(game.players.one.name);
                makeWaitForPlayer2();
            }
            else {
                makePlayer1WaitNoMessage(game.players.one.name, game.players.two.name);
                makeWaitForPlayer1();
            }
            return;
        }
        if (game.players.one.name !== "" && game.players.two.name !== "" && game.players.turn === "1" && game.players.one.choice === "" && game.players.two.choice === "") {
            console.log(2);
            if (playerNo === "1") {
                makePlayer2Wait(game.players.one.name, game.players.two.name);
                makePlayer1Turn(game.players.one.name);
            }
            else {
                makePlayer1TurnNoObj(game.players.one.name);
                makePlayer2Wait(game.players.one.name, game.players.two.name);
            }
            return;
        }

        if (game.players.one.name !== "" && game.players.two.name !== "" && game.players.turn === "2" && game.players.one.choice !== "" && game.players.two.choice === "") {
            console.log(3);
            if (playerNo === "1") {
                makePlayer1ChoiceBig(game.players.one.name, game.players.two.name, game.players.one.choice)
                makePlayer2TurnNoObj(game.players.two.name);
            }
            else {
                makePlayer1Wait(game.players.one.name, game.players.two.name);
                makePlayer2Turn(game.players.two.name);
            }
            return;
        }

        if (game.players.one.name !== "" && game.players.two.name !== "" && game.players.turn === "1" && game.players.one.choice !== "" && game.players.two.choice !== "") {
            console.log(4);
            if (playerNo === "1") {
                makePlayer2ChoiceBig(game.players.one.name, game.players.two.name, game.players.two.choice)
                showWinner();
            }
            else {
                makePlayer1ChoiceBig(game.players.one.name, game.players.two.name, game.players.one.choice)
                makePlayer2ChoiceBig(game.players.one.name, game.players.two.name, game.players.two.choice)
                showWinner();
            }
            return;
        }

        if (game.players.one.name === "" && game.players.two.name !== "" && game.players.turn === "" && game.players.one.choice === "" && game.players.two.choice === "") {
            console.log(5);
            if (playerNo === "1") {
                makePlayer2Wait(game.players.one.name, game.players.two.name);
            }
            else {
                makeWaitForPlayer1();
            }
            return;
        }


    }
})

