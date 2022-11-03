function suma(num1, num2, num3) {
    return num1 + num2 + num3;
}

function concatenacion(nombre, apellido1, apellido2) {
    return nombre + " " + apellido1 + " " + apellido2;
}

function comparacion(num1, num2) {
    if (num1 > num2) return num1;
    else return num2;
}

console.log(suma(1, 2, 3));
console.log(concatenacion("Ismael", "Baena", "Mondejar"));
console.log(comparacion(10, 1000));
