// HTML ELEMENT TARGETS
const landBtn = document.getElementById('landing-button');
const levelsBtn = document.getElementById('levels-btn');
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const apiButton = document.getElementById('apiBtn');
const darkButton = document.getElementById('dark-button');
const stuBtn = document.getElementById('btn-two');


// FUNCTIONS & CHANGES
function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.landing').style.backgroundColor = "#" + randomColor;
    
}

function changeBtnColor() {
    const randBtnColor = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.landing-button').style.backgroundColor = `#${randBtnColor}`;
}

function changeLevelsColor() {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('section.levels').style.backgroundColor = `#${randomColor1}`;

    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.levelone-div').style.backgroundColor = `#${randomColor2}`;

    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.leveltwo-div').style.backgroundColor = `#${randomColor3}`;

    const randomColor4 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.levelthree-div').style.backgroundColor = `#${randomColor4}`;

    const randomColor5 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.levelfour-div').style.backgroundColor = `#${randomColor5}`;

    const randomColor6 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.levelfive-div').style.backgroundColor = `#${randomColor6}`;

    const randomColor7 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.levelsix-div').style.backgroundColor = `#${randomColor7}`;

    const randomColor8 = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('.levelseven-div').style.backgroundColor = `#${randomColor8}`;
}

function randomFact() {
    fetch('https://api.fungenerators.com')
        .then(res => res.json())
        .then(data => console.log(data));
}

// Dark Mode Logic
function goDark() {
    document.getElementById('dark-mode').style.backgroundColor = 'black';
    document.getElementById('dark-mode-container').style.backgroundColor = 'black';
    document.getElementById('dark-mode-title').style.color = 'white';
}

function goLight() {
    document.getElementById('dark-mode').style.backgroundColor = 'white';
    document.getElementById('dark-mode-container').style.backgroundColor = 'white';
    document.getElementById('dark-mode-title').style.color = 'black';
}

function stupidButtonActivate() {
    stuBtn.appendChild("green");
    return 
}



// EVENT LISTENERS
landBtn.addEventListener('mousedown', () => {
    changeColor();
    changeBtnColor();

    const interval = setInterval(function() {
        changeColor();
        changeBtnColor();
    }, 150);
    
    landBtn.addEventListener('mouseup', () => {
        clearInterval(interval);
    });
});

levelsBtn.addEventListener('mousedown', () => {
    changeLevelsColor();

    const interval = setInterval(function() {
        changeLevelsColor();
    }, 75);

    levelsBtn.addEventListener('mouseup', () => {
        clearInterval(interval);
    })
})

darkButton.addEventListener('mousedown', () => {
    goDark();
})

darkButton.addEventListener('mouseup', () => {
    goLight();
})

apiButton.addEventListener('submit', randomFact);

randomFact();