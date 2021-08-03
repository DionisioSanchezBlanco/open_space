const password = "TrustNo1";
let checkBoxes = document.querySelectorAll("input[type=checkbox]");
let checkRanges = document.querySelectorAll("input[type=range]");
let ranges = document.querySelectorAll("input[type=range]");
let launchBtn = document.getElementById("launch");
let rocket = document.querySelector(".rocket");

function disables() {
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].disabled = true;
    }

    for (let j = 0; j < ranges.length; j++) {
        ranges[j].disabled = true;
    }
    launchBtn.disabled = true;
}

// Disable all functions by default
function enables() {
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].disabled = false;
    }

    for (let j = 0; j < ranges.length; j++) {
        ranges[j].disabled = false;
    }
}

function checkEnables(){
    let launchOk = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].onchange = function(){
            if (checkBoxes[i].checked) {
                launchOk += 1;
                console.log(launchOk);
            }else{
                launchOk -= 1;
                console.log(launchOk);
            }
        };
    }
    let launchOkRanges = 0;
    for(let i = 0; i<checkRanges.length; i++){
        checkRanges[i].onchange = function(){
            if (checkRanges[i].value == 100){
                launchOkRanges += 1;
                console.log(launchOkRanges);
            }
        }
    }

    if (launchOk === 6){
        launchBtn.disabled = false;
        console.log("ready");
    }
}

disables();
checkEnables();

let ePass = document.getElementById("password");
let checkPass = document.getElementById("unlock")

checkPass.addEventListener("click", function (e){
    if (ePass.value == password){
        enables();
    }else{
        ePass.value = "";
    }
})

let counter = 0;
for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            counter += 1;
        } else {
            counter -= 1;
        }
        if (counter == 6){
            console.log("ready");
        }
    });
}

for (let i = 0; i < checkRanges.length; i++) {
    checkRanges[i].addEventListener('change', (event) => {
        if (event.currentTarget.value == 100) {
            counter += 1;
        } else {
            counter -= 1;
        }
        if (counter == 11){
            launchBtn.disabled = false;
        }
    });
}

launchBtn.addEventListener("click", function (){
console.log("Launched");
rocket.style.animationName = "launching";
rocket.style.animationDuration = "3s";
});
