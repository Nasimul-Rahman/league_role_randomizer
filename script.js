const topContainer = document.getElementById('top_container');
const bottomContainer = document.getElementById('bottom_container');
const supportContainer = document.getElementById('support_container');
const midContainer = document.getElementById('mid_container');
const jungleContainer = document.getElementById('jungle_container');

console.log(topContainer);
console.log(bottomContainer);
console.log(supportContainer);
console.log(midContainer);
console.log(jungleContainer);

const topFormValue = document.getElementById('top_form_value');
const bottomFormValue = document.getElementById('bottom_form_value');
const supportFormValue = document.getElementById('support_form_value');
const midFormValue = document.getElementById('mid_form_value');
const jungleFormValue = document.getElementById('jungle_form_value');

function removeFromArray(index, userInputArrayModified, userInputArrayModifiedV1) {
    for(let i = 0; i < userInputArrayModified.length; i++) {
        if (i != index) {
            userInputArrayModifiedV1.push(userInputArrayModified[i]);
        }
    }
}

document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();

    let userInput = document.getElementById('name').value;
    let userInputArray = userInput.split(' ');
    let userInputArrayModified = [];
    let userInputArrayModifiedV1 = []

    for(let i = 0; i < userInputArray.length; i++) {
        userInputArrayModified.push(userInputArray[i].replace(',', ''));
    }

    let topIndex = Math.floor(Math.random() * 5);
    topFormValue.innerHTML = "<h2>" + userInputArrayModified[topIndex] + "</h2>";
    removeFromArray(topIndex, userInputArrayModified, userInputArrayModifiedV1);

    userInputArrayModified = userInputArrayModifiedV1
    userInputArrayModifiedV1 = []

    console.log(userInputArrayModified);

    let bottomIndex = Math.floor(Math.random() * 4);
    bottomFormValue.innerHTML = "<h2>" + userInputArrayModified[bottomIndex] + "</h2>";
    removeFromArray(bottomIndex, userInputArrayModified, userInputArrayModifiedV1);

    userInputArrayModified = userInputArrayModifiedV1
    userInputArrayModifiedV1 = []

    console.log(userInputArrayModified);

    let supportIndex = Math.floor(Math.random() * 3);
    supportFormValue.innerHTML = "<h2>" + userInputArrayModified[supportIndex] + "</h2>";
    removeFromArray(supportIndex, userInputArrayModified, userInputArrayModifiedV1);

    userInputArrayModified = userInputArrayModifiedV1
    userInputArrayModifiedV1 = []

    console.log(userInputArrayModified);

    let midIndex = Math.floor(Math.random() * 2);
    midFormValue.innerHTML = "<h2>" + userInputArrayModified[midIndex] + "</h2>";
    removeFromArray(midIndex, userInputArrayModified, userInputArrayModifiedV1);

    userInputArrayModified = userInputArrayModifiedV1
    userInputArrayModifiedV1 = []

    console.log(userInputArrayModified);

    jungleFormValue.innerHTML = "<h2>" + userInputArrayModified[0] + "</h2>";
})

function formValidation() {
    var input = document.getElementById('name').value;

    if(/^[a-zA-z]+\, [a-zA-z]+\, [a-zA-z]+\, [a-zA-z]+\, [a-zA-z]+$/.test(input) == false) {
        console.log("working");
        document.getElementsByClassName('textError')[0].style.display = "block";
        return false;
    }
    return true;

}