var varData = "Hello";
let letData = true;
const CONSTDATA = 19;

console.log("varData: " + varData);
console.log("letData: " + letData);
console.log("CONSTDATA: " + CONSTDATA);

console.log("Typeof varData: " + typeof varData);
console.log("Typeof letData: " + typeof letData);
console.log("Typeof CONSTDATA: " + typeof CONSTDATA);

let scope = "Global";
console.log("scope: " + scope);
if (letData) {
    let scope = "Local";
console.log("scope: " + scope);
}