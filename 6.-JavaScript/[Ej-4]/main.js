function arrow() {
    return "Ismael Baena Mondéjar";
}
console.log(arrow());

function showBool(boolVar) {
    console.log(boolVar);
}
showBool(true);

function showInfinite(...values) {
    values.forEach(element => {
        console.log(element);
    });
}
showInfinite(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);