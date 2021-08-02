const password = "TrustNo1";
let checkBoxes = document.querySelectorAll("input[type=checkbox]");
let ranges = document.querySelectorAll("input[type=range]");
let launchBtn = document.getElementById("launch");

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
    launchBtn.disabled = false;
}

disables();

let ePass = document.getElementById("password");
let checkPass = document.getElementById("unlock")

checkPass.addEventListener("click", function (e){
    if (ePass.value == password){
        enables();
    }else{
        ePass.value = "";
    }
})
