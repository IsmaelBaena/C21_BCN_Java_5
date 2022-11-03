function mes(numMes) {
    var mesV;
    switch (numMes) {
        case 1:
            mesV = "Enero";
            break;
        case 2:
            mesV = "Febrero";
            break;
        case 3:
            mesV = "Mazo";
            break;
        case 4:
            mesV = "Abril";
            break;
        case 5:
            mesV = "Mayo";
            break;
        case 6:
            mesV = "Junio";
            break;
        case 7:
            mesV = "Julio";
            break;
        case 8:
            mesV = "Agosto";
            break;
        case 9:
            mesV = "Septiembre";
            break;
        case 10:
            mesV = "Octubre";
            break;
        case 11:
            mesV = "Noviembre";
            break;
        case 12:
            mesV = "Diciembre";
            break;
        default:
            mesV = "Numero Erroneo";
    }
    return mesV;
}

function conversorNumString(num) {
    var numV;
    switch (num) {
        case 1:
            numV = "Uno";
            break;
        case 2:
            numV = "Dos";
            break;
        case 3:
            numV = "Tres";
            break;
        case 4:
            numV = "Cuatro";
            break;
        case 5:
            numV = "Cinco";
            break;
        default:
            numV = "Valor no Valido";
            break;
    }
    return numV;
}

console.log(mes(7));
console.log(conversorNumString(3));

