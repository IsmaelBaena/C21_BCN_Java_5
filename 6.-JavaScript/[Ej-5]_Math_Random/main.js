function flipCoin() {
    var side = Math.round(Math.random());
    if (side == 1) return "cruz";
    else return "cara";
}

console.log(flipCoin());