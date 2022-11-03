const ARRAY1 = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"],
    ARRAY2 = ["🍕", "🍕", "🍍", "🍕", "🍕"],
    ARRAY3 = ["🍓", "🍋", "🍓", "🍋", "🍓"],
    ARRAY4 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"],
    ARRAY5 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];

function findPositionEmoji(emoji, array) {
    let flag = false, result = null;
    for (let i = 0; i < array.length && !flag; i++) {
        if (array[i] == emoji) {
            flag = true;
            result = i;
        } 
    }
    return result;
}

function encontrarEmojiEnArray(emoji, array) {
    array.find(item => {
        if (item == emoji) {
            console.log("Si existe el emoji " + emoji + " en el array");
        }
    });
}

function ej1() {
    let array = ARRAY1;
    array.fill("🍺", findPositionEmoji("🍕", array), array.length);
    console.log("Ejercio 1:");
    console.log(array.toString());
    console.log("-------------");
}

function ej2() {
    let array = ARRAY2;
    console.log("Ejercio 2:");
    encontrarEmojiEnArray("🍍", array);
    console.log("-------------");
}

ej1();
ej2();