
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
            losses: 0,
            name: "",
            wins: 0
        },
        two: {
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

function setPlayer(playerName) {
    if (game.players.one.name === "") {
        game.players.one.name = playerName;
    }
    else {
        game.players.two.name = playerName;
    }
}

function endGame() {
    game.players.one.name = "";
    game.players.two.name = "";
    //firebase.database().ref().child(players.getKey()).remove();
    firebase.database().ref().child("players").remove();
}

firebase.database().ref().on("value", function (snapshot) {
    //console.log(snapshot.val());
    if (snapshot.val() === null) {
        endGame();
    }
    else {
        game = snapshot.val();
        let playerNo = $("#playerId").attr("playerNo");
        if (game.players.one.name !== "" && game.players.two.name !== "" && game.players.turn === "") {
            if (playerNo === "1") {
                makePlayer2Wait(game.players.one.name, game.players.two.name);
                makePlayer1Turn(game.players.one.name, game.players.two.name);
            }
            else {
                makePlayer1Turn(game.players.one.name, game.players.two.name);
                makePlayer2Wait(game.players.one.name, game.players.two.name);
            }
        }
        if (game.players.one.name !== "" && game.players.two.name === "" && game.players.turn === "") {
            if (playerNo === "1") {
                makePlayer1WaitNoMessage(game.players.one.name, game.players.two.name);
            }
            else {
                makePlayer1WaitNoMessage(game.players.one.name, game.players.two.name);
            }
        }

    }
})

