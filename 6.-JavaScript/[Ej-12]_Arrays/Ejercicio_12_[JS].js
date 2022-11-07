const ABECEDARIO = ["a", "b", "c", "d", "e"];

function recorrerAbcedario() {
    ABECEDARIO.forEach(element => {
        console.log("abcedario: " + element);
    });
}

function iterationNumTo0(num) {
    do {
        var aux = num - 1;
        console.log(num + " - 1 = " + aux);
        num --;
    } while (num != 0);
}

recorrerAbcedario();
console.log("----------");
iterationNumTo0(5);