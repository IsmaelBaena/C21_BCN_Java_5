const ARRAY1 = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"],
    ARRAY2 = ["🍕", "🍕", "🍍", "🍕", "🍕"],
    ARRAY3 = ["🍓", "🍋", "🍓", "🍋", "🍓"],
    ARRAY4 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"],
    ARRAY5 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

function styleEj(num, frase) {
    console.log("Ejercio " + num + ":");
    console.log(frase);
    console.log("-------------");
}

function ej1() {
    let newArray = ARRAY1;
    newArray.fill("🍺", newArray.indexOf("🍕"));
    styleEj(1, newArray.toString());
}

function ej2() {
    let result;
    if (ARRAY2.includes("🍍")) {
        result = "Si existe el emoji 🍍 en el array";
    } else {
        result = "No existe el emoji  🍍 en el array";
    }
    styleEj(2, result);
}

function ej3() {
    let newArray = ARRAY2.splice(2, 1);
    styleEj(3, ARRAY2.toString());
}

function ej4 () {
    let newArray = ARRAY3;
    newArray.forEach((element, index) => {
        if (element == "🍓") {
            newArray.splice(index, 1, "🍄");
        }
    });
    styleEj(4, newArray.toString());
}

function ej5() {
    let newArray = ARRAY4;
    newArray.forEach((element, index) => {
        if (element == "🌶️") {
            newArray.splice(index, 1, "🌶️","🥵");
        }
    });
    styleEj(5, newArray.toString());
}

function ej6() {
    let newArray = ARRAY5;
    newArray.forEach((element, index, array) => {
        if (element == "🎴" && array[index+1] != "🃏") {
            newArray.splice(index, 1, "🎴", "🃏");
        }
    });
    styleEj(6, newArray.toString());
}

ej1();
ej2();
ej3();
ej4();
ej5();
ej6();