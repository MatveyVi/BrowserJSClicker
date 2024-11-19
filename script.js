// Score counter
let score = 0;
// Score per click 
let PointsPerClick = 2;
let PointsPerSec = 0;
// Upgrade 
let upgradePriceCounter = 100;
let LevelCliker = 1;

let upgradePriceAutocliker = 250;
let LevelAutocliker = 0;

let upgradeDonate = 1000;
let LevelDonate = 0;



// Elements 
const clickerImage = document.getElementById('clickerImage');
const scoreDisplay = document.getElementById('scoreDisplay');

// Upgrade Elements 
const upgradeClickLevel = document.getElementById('upgradeClickLevel');
const upgradeClickPrice = document.getElementById('upgradeClickPrice');
const upgradeClick = document.getElementById('borderCliker');

const upgradeAutoclickerLevel = document.getElementById("autoclikerLevel");
const upgradeAutoclikerPrice = document.getElementById("autoclickerPrice");
const upgradeAutoclicker = document.getElementById("borderAutoclicker");

const donateLevel = document.getElementById('donateLevel');
const upgradeDonateButton = document.getElementById('borderDonate');

const scoreDiff = document.getElementById('scoreDiff');

//borderboxes
const borderCliker = document.getElementById('borderCliker');
const borderAutoclicker = document.getElementById("borderAutoclicker");
const borderDonate = document.getElementById("borderDonate");




// Onclick
clickerImage.addEventListener('click', () => {
    score += PointsPerClick;
    scoreDiff.innerHTML = `+${PointsPerClick}`;
    scoreDisplay.textContent = `Score: ${score}`;
    clickerImage.classList.add('animateClick');
    scoreDiff.classList.add('animateScore');

    setTimeout(() => {
        clickerImage.classList.remove('animateClick');
    }, 100);
    setTimeout(() => {
        scoreDiff.classList.remove('animateScore');
    }, 200);
});
// Upgrade score per click
upgradeClick.addEventListener('click', () => {
    if (score >= upgradePriceCounter) {
        score -= upgradePriceCounter;
        upgradePriceCounter *= 3;
        PointsPerClick += 3;
        LevelCliker += 1;
        upgradeClickLevel.innerHTML  = `Click Level: <b>${LevelCliker}</b>`;
        scoreDisplay.textContent = `Score: ${score}`;
        upgradeClickPrice.innerHTML  = `Upgrade Price : <b>${upgradePriceCounter}</b>`;
    }
    else {
        alert("Недостаточно очков! Тапай лучше!")
    }
});
upgradeAutoclicker.addEventListener('click', () => {
    if (score >= upgradePriceAutocliker) {
        score -= upgradePriceAutocliker;
        upgradePriceAutocliker *= 2;
        PointsPerSec += 1;
        LevelAutocliker += 1;
        upgradeAutoclickerLevel.innerHTML  = `Autocliker Level: <b>${LevelCliker}</b>`;
        scoreDisplay.textContent = `Score: ${score}`;
        upgradeAutoclikerPrice.innerHTML  = `Upgrade Price : <b>${upgradePriceAutocliker}</b>`;
    }
        
});
upgradeDonateButton.addEventListener('click', () => {
    if (score >= upgradeDonate) {
        score -= upgradeDonate;
        LevelDonate += 1;
        donateLevel.innerHTML = `saved beavers: <b>${LevelDonate}</b>`
        scoreDisplay.textContent = `Score: ${score}`;
        alert('Вы спасли одного бобра!')
    }
});



//Autoclier Logic
setInterval(() => {
    score += PointsPerSec;
    scoreDisplay.textContent = `Score: ${score}`;
}, 1000);





//Upgrade visual sys
setInterval(() => {
    CheckUpgrade()
}, 500);

function CheckUpgrade() {
    if (score >= upgradePriceCounter) {
        borderCliker.style.backgroundColor =  'rgba(60, 179, 113, 0.8)';
    }
    else {
        borderCliker.style.backgroundColor =  'rgba(60, 179, 113, 0)';
    }
    if (score >= upgradePriceAutocliker) {
        borderAutoclicker.style.backgroundColor =  'rgba(60, 179, 113, 0.8)';
    }
    else {
        borderAutoclicker.style.backgroundColor =  'rgba(60, 179, 113, 0)';
    }
    if (score >= upgradeDonate) {
        borderDonate.style.backgroundColor =  'rgba(60, 179, 113, 0.8)';
    }
    else {
        borderDonate.style.backgroundColor =  'rgba(60, 179, 113, 0)';
    }
}