let cursedAmount = 12312783;
let ultraCursedAmount
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
let ultracursedEnergyPerSecond
let fingersEaten = 0;
let fingersOwned = 0;
let fingerPower = 0;
let fingerEatCost = 100000;
let ghostcatOwned = 0;



function buyUpgradeOne() {
    if (cursedAmount >= upgradeOneCost) {
        cursedAmount = cursedAmount - upgradeOneCost;
        upgradeOne = upgradeOne + 1;
        upgradeOneCost = Math.round(upgradeOneCost * 1.1);
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
        upgradeTwoCost = Math.round(upgradeTwoCost * 1.15);
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

function buyUpgradeFour() {
    if ( cursedAmount >= upgradeFourCost ) {
        cursedAmount = cursedAmount - upgradeFourCost;
        upgradeFour = upgradeFour + 1;
        upgradeFourCost = Math.round(upgradeFourCost * 1.35);
        document.getElementById("cursedAmount").innerHTML = cursedAmount
        document.getElementById("upgradeFourCost").innerHTML = upgradeFourCost;
        document.getElementById("upgradeFour").innerHTML = upgradeFour;
        updateEnergyPerSecond();
    }
}

function buyFingerUpgrade() {
    if (cursedAmount >= fingerEatCost) {
        cursedAmount = cursedAmount - fingerEatCost
        fingersEaten = fingersEaten + 1;
        fingerPower + 1000;
        updateEnergyPerSecond();
        
    }
}

function BuyFirstPet() {
    if ( fingersEaten >= 1)
    {
        fingersEaten = fingersEaten - 1;
        fingersOwned = fingersOwned + 1;
        cursedEnergyPerSecond = cursedEnergyPerSecond - 100000;
        ghostcatOwned = ghostcatOwned + 1
        document.getElementById("ghostcatOwned").innerHTML = ghostcatOwned;
        updateEnergyPerSecond();
    }
}

function addToCursedEnergy(amount) {
    cursedAmount = cursedAmount + amount;
    document.getElementById("cursedAmount").innerHTML = cursedAmount;
}

function updateEnergyPerSecond() {
    cursedEnergyPerSecond = upgradeOne + upgradeTwo  * 10;
    cursedEnergyPerSecond = cursedEnergyPerSecond + upgradeThree * 100;
    cursedEnergyPerSecond = cursedEnergyPerSecond + upgradeFour * 250;
    cursedEnergyPerSecond = cursedEnergyPerSecond + fingersEaten * 0;
    cursedEnergyPerSecond = cursedEnergyPerSecond + ghostcatOwned * 1000;
    document.getElementById("energyPerSecond").innerHTML = cursedEnergyPerSecond
}

setInterval(function() {
    cursedAmount = cursedAmount + upgradeOne;
    cursedAmount = cursedAmount + upgradeTwo + upgradeThree * 10;
    cursedAmount = cursedAmount + upgradeFour * 250;
    cursedAmount = cursedAmount + ghostcatOwned * 1000;
    document.getElementById("cursedAmount").innerHTML = cursedAmount;
    document.getElementById("fingersEaten").innerHTML = fingersEaten
    document.getElementById("fingersOwned")
}, 1000);