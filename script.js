let cursedAmount = 25000000000000000000000000000000;
let clickingPower = 1;
let upgradeOneCost = 15;
let upgradeOne = 0;
let upgradeTwoCost = 150;
let upgradeTwo = 0;
let upgradeThreeCost = 1000;
let upgradeThree = 0;
let upgradeFourCost = 10000;
let upgradeFour = 0;
let cursedEnergyPerSecond = 0;



function buyUpgradeOne() {
    if (cursedAmount >= upgradeOneCost) {
        cursedAmount = cursedAmount - upgradeOneCost;
        upgradeOne = upgradeOne + 1;
        upgradeOneCost = Math.round(upgradeOneCost * 1.05);
        document.getElementById("cursedAmount").innerHTML = cursedAmount;
        document.getElementById("upgradeOneCost").innerHTML = upgradeOneCost;
        document.getElementById("upgradeOne").innerHTML = upgradeOne;
        updateEnergyPerSecond();
    }
}

function buyUpgradeTwo() {
    if (cursedAmount >= upgradeTwoCost) {
        cursedAmount = cursedAmount - upgradeTwoCost;
        upgradeTwo = upgradeTwo + 1;
        upgradeTwoCost = Math.round(upgradeTwoCost * 1.1);
        document.getElementById("cursedAmount").innerHTML = cursedAmount;
        document.getElementById("upgradeTwoCost").innerHTML = upgradeTwoCost;
        document.getElementById("upgradeTwo").innerHTML = upgradeTwo;
        updateEnergyPerSecond();
    }
}

function buyUpgradeThree() {
    if ( cursedAmount >= upgradeThreeCost) {
        cursedAmount = cursedAmount - upgradeThreeCost;
        upgradeThree = upgradeThree + 1;
        upgradeThreeCost = Math.round(upgradeThreeCost * 1.3);
        document.getElementById("cursedAmount").innerHTML = cursedAmount
        document.getElementById("upgradeThreeCost").innerHTML = upgradeThreeCost;
        document.getElementById("upgradeThree").innerHTML = upgradeThree;
        updateEnergyPerSecond();
    }
}


// Add to score
function addToCursedEnergy(amount) {
    cursedAmount = cursedAmount + amount;
    document.getElementById("cursedAmount").innerHTML = cursedAmount;
}

function updateEnergyPerSecond() {
    cursedEnergyPerSecond = upgradeOne + upgradeTwo  * 10;
    cursedEnergyPerSecond = cursedEnergyPerSecond + upgradeThree * 100;
    document.getElementById("energyPerSecond").innerHTML = cursedEnergyPerSecond
}

setInterval(function() {
    cursedAmount = cursedAmount + upgradeOne;
    cursedAmount = cursedAmount + upgradeTwo + upgradeThree * 10;
    document.getElementById("cursedAmount").innerHTML = cursedAmount;
}, 1);