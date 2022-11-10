let hungerAmount = 100, funAmount = 100, powerAmount = 0, energyAmount = 0;
let happinessAmount = 0, maxHappiness = 100, evo = 1;
const progressiveHungerLoss = 20, progressiveFunLoss = 30, progressiveHappinesLoss = 25, progressiveEnergyGain = 10;
const hungerBar = $("#hunger"), funBar = $("#fun"), happinessBar = $("#happiness"), powerBar = $("#power"), energyBar = $("#energy");

/* Setter Progress Bar Values */
function setHungerProgressBarValue(num, isSum) {
    if (isSum) { 
        setPowerProgressBarValue(5, true);
        setEnergyProgressBarValue(5, false);
        if ((hungerAmount + num) > 100) { 
            hungerAmount = 100; 
            setHappinessProgressBarValue(10, true);
        } 
        else {
            setHappinessProgressBarValue(5, true); 
            hungerAmount += num; 
        }
    } else { 
        if ((hungerAmount - num) < 0) { 
            hungerAmount = 0; 
            setEnergyProgressBarValue(15, false);
            setHappinessProgressBarValue(20, false); 
        } else { hungerAmount -= num; }
    }
    changeMessage("eatmssg", hungerAmount + "% Full");
    hungerBar.val(hungerAmount);
}

function setPowerProgressBarValue(num, isSum) {
    if (isSum) { 
        if ((powerAmount + num) > 100) { powerAmount = 100; } 
        else { powerAmount += num; }
    } else { 
        setEnergyProgressBarValue(20, false)
        setHappinessProgressBarValue(20, true);
        if ((powerAmount - num) < 0) { powerAmount = 0; }
        else { powerAmount -= num; }
    }
    changeMessage("powermssg", powerAmount + "% Power");
    powerBar.val(powerAmount);
}

function setEnergyProgressBarValue(num, isSum) {
    if (isSum) { 
        setPowerProgressBarValue(10, true);
        if ((energyAmount + num) > 100) { 
            setHappinessProgressBarValue(20, true);
            energyAmount = 100; 
        } else { 
            setHappinessProgressBarValue(10, true);
            energyAmount += num; }
    } else { 
        if ((energyAmount - num) < 0) { energyAmount = 0; } 
        else { energyAmount -= num; }
    }
    changeMessage("energymssg", energyAmount + "% Energy");
    energyBar.val(energyAmount);
}

function setFunProgressBarValue(num, isSum) {
    funAmount
    if (isSum) { 
        setPowerProgressBarValue(5, true);
        if ((funAmount + num) > 100) { 
            setHappinessProgressBarValue(50, true);
            funAmount = 100; 
        } else { 
            setHappinessProgressBarValue(5, true);
            funAmount += num; 
        }
    } else { 
        if ((funAmount - num) < 0) { 
            funAmount = 0; 
            setHappinessProgressBarValue(30, false);
        } else { funAmount -= num; }
    }
    changeMessage("funmssg", funAmount + "% Fun");
    funBar.val(funAmount);
}

function setHappinessProgressBarValue(num, isSum) {
    if (isSum) { 
        if ((happinessAmount + num) >= maxHappiness) { 
            if (evo < 4) { evolve(); }
            else { happinessAmount += maxHappiness; }
        } 
        else { happinessAmount += num; }
    } else { 
        if ((happinessAmount - num) < 0) { happinessAmount = 0; } 
        else { happinessAmount -= num; }
    }
    changeMessage("happinesmssg", happinessAmount + "% Happiness");
    happinessBar.val(happinessAmount);
}

/* Change message */
function changeMessage(mName, mText) { $("#"+mName).html(mText); }

/* Change Sprite depending on happiness */
function evolve() {
    happinessAmount = 0;
    maxHappiness = maxHappiness * 2;
    document.getElementById("happiness").max = maxHappiness;
    var text = "";
    switch(evo) {
        case 1:
            $("#evo1").toggle();
            $("#evo2").toggle();
            text = "Ivasaur";
            break;
        case 2:
            $("#evo2").toggle();
            $("#evo3").toggle();
            text = "Venasaur";
            break;
        case 3:
            $("#evo3").toggle();
            $("#evo4").toggle();
            text = "Mega-Venasaur";
            break;
    }
    changeMessage("pokeName", text);
    evo ++;
}

/* Update Methods */
function update() {
    setTimeout(() => {
        setHungerProgressBarValue(progressiveHungerLoss, false);
        setFunProgressBarValue(progressiveFunLoss, false);
        setHappinessProgressBarValue(progressiveHappinesLoss, false);
        setEnergyProgressBarValue(progressiveEnergyGain, true);
        update();
    }, 5000);
}

/* Button Methods */
function button(id, num) {
    switch (id) {
        case "hunger":
            if (hungerAmount != 100) { setHungerProgressBarValue(num, true); }
            break;
        case "fun":
            if (funAmount != 100) { setFunProgressBarValue(num, true); }
            break;
        case "power":
            if (powerAmount != 0) { setPowerProgressBarValue(num, false); }
            break;
        case "energy":
            if (energyAmount != 100) { setEnergyProgressBarValue(num, true); }
            break;
    }
}

/* Buttons Syntax*/
$("#eatButton_1").click(() =>{ button("hunger", 5) });
$("#eatButton_2").click(() =>{ button("hunger", 10) });
$("#eatButton_3").click(() =>{ button("hunger", 15) });

$("#funButton_1").click(() =>{ button("fun", 5) });
$("#funButton_2").click(() =>{ button("fun", 10) });
$("#funButton_3").click(() =>{ button("fun", 15) });


$("#poweButton_1").click(() =>{ button("power", 30) });
$("#poweButton_2").click(() =>{ button("power", 50) });


$("#energyButton_1").click(() =>{ button("energy", 20) });
$("#energyButton_2").click(() =>{ button("energy", 25) });

/* Main */
$("#evo2").toggle();
$("#evo3").toggle();
$("#evo4").toggle();
update();


