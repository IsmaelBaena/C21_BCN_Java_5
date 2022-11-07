let array = ["🐱‍🏍", "🤢", "🎎"];
const EMOJIS = ["🤣", "🙌", "😜", "🤷‍♂️", "👌", "✔", "🎂", "😎", "✌", "🐱‍👓", "🎁", "🤔", "👌", "✨", "🐱‍🏍", "💖", "🤦‍♂️", "🌹"];
const RESULT = $("#result");
const INSERTINPUT = $("#insertInput");
const REMOVEINPUT = $("#removeInput");

function randomEmoji() { return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]; }
function applyResutl() { RESULT.html(array); }

applyResutl();

$("#push").click(() => {
    array.push(randomEmoji());
    applyResutl();
});

$("#unshift").click(() => {
    array.unshift(randomEmoji());
    applyResutl();
});

$("#insert").click(() => {
    array.splice(INSERTINPUT.val(), 0, randomEmoji())
    applyResutl();
});

$("#pop").click(() => {
    array.pop();
    applyResutl();
});

$("#shift").click(() => {
    array.shift();
    applyResutl();
});

$("#remove").click(() => {
    array.splice(REMOVEINPUT.val() - 1, 1)
    applyResutl();
});



