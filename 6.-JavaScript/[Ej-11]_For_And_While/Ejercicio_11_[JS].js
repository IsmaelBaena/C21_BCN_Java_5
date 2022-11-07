const REPETITIONS = 10

function bucleFor() {
    for (let i = 0; i < 10; i ++) {
        console.log("I love code [for]");
    }
}

function bucleWhile() {
    var i = 0;
    while (i < 10) {
        console.log("I love code [while]");
        i ++;
    }
}

bucleFor();
console.log("----------------");
bucleWhile();