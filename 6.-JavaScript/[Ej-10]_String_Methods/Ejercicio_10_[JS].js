const superA = "apocalipsis"

function changeAForO(stringToChange) {
    var changed = stringToChange.replace("a", "o");
    console.log(stringToChange + " changed to "+ changed);
}

function startsWithAca(stringToCheck) {
    var flag = stringToCheck.startsWith("aca");
    if (flag) console.log(stringToCheck + " si empieza por aca");
    else console.log(stringToCheck + " no empieza por aca");
}

function threeSaludatins(hello) {
    console.log((hello + " ").repeat(3));
}

changeAForO(superA);
startsWithAca("academia");
startsWithAca("escuela");
threeSaludatins("Hello");