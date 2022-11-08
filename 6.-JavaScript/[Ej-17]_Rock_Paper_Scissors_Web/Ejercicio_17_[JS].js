const OPCIONES = ["💎", "🧻", "✂"]
let gameEnd = false;
let winsIA = 0, winsPlayer = 0;

function main() {
    console.log("🏁 Que comience el juego 🏁");
    while(!gameEnd) {
        let respuestaIA = generarRespuestaIA();
        let respuestaPlayer = generarRespuestaPlayer();
        checkWinner(respuestaIA, respuestaPlayer);
    }
    let ganador;
    if (winsPlayer > winsIA) ganador = "Player 1";
    else ganador = "Computer";
    console.log("Fin de juego gana " + ganador + " ✌");
}

function generarRespuestaIA() { return Math.floor(Math.random() * OPCIONES.length); }

function generarRespuestaPlayer() {
    let respuestaValida = false;
    let respuesta = 0;
    while (!respuestaValida) {
        respuesta = prompt("Introduce uno de los siguientes valores:\nPiedra = 1\nPapel = 2\nTijeras = 3");
        if (respuesta == "1" || respuesta == "2" || respuesta == "3") { respuestaValida = true; }
        else { console.log("Esta no es una respuesta valida"); }
    }
    return respuesta - 1;
}

function checkWinner(ia, player) {
    console.log("\t♦ Player 1 " + OPCIONES[player]);
    console.log("\t♦ Computer " + OPCIONES[ia]);
    if (ia == player) console.log("\t" + OPCIONES[player] + " VS " + OPCIONES[ia] + " empatan");
    else if ((player > ia) || (player == 0 && ia == 2)) {
        winsPlayer ++;
        console.log("\t" + OPCIONES[player] + " gana a " + OPCIONES[ia]);
    } else {
        winsIA ++;
        console.log("\t" + OPCIONES[ia] + " gana a " + OPCIONES[player]);
    }
    console.log("🥊 Player 1: [" + winsPlayer + "]\tComputer: [" + winsIA + "] 🥊");
    if (winsIA == 3 || winsPlayer == 3) { gameEnd = true; }
}

main();