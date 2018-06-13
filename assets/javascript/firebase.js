
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
            losses: 0,
            name: "",
            wins: 0
        },
        two: {
            choice: "",
            losses: 0,
            name: "",
            wins: 0
        },
        turn: "",
        message: ""
    }
}

function sendGameToFireBase() {
    firebase.database().ref().set(game);
}

function endGame() {
    game.players.one.name = "";
    game.players.two.name = "";
    firebase.database().ref().child("players").remove();
}

function setPlayer(playerName) {
    if (game.players.one.name === "") {
        game.players.one.name = playerName;
    }
    else {
        game.players.two.name = playerName;
    }
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
        if (game.players.one.name !== "" && game.players.two.name === "" && game.players.turn === "") {
            console.log(1);
            if (playerNo === "1") {
                makePlayer1WaitNoMessage(game.players.one.name, game.players.two.name);
            }
            else {
                makePlayer1WaitNoMessage(game.players.one.name, game.players.two.name);
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
        

    }
})

