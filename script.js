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

document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();

    let userInput = document.getElementById('name').value;
    let userInputArray = userInput.split(' ');
    let userInputArrayModified = [];

    for(let i = 0; i < userInputArray.length; i++) {
        userInputArrayModified.push(userInputArray[i].replace(',', ''));
    }

    topFormValue.innerHTML = "<h2>" + userInputArrayModified[0] + "</h2>";
    bottomFormValue.innerHTML = "<h2>" + userInputArrayModified[1] + "</h2>";
    supportFormValue.innerHTML = "<h2>" + userInputArrayModified[2] + "</h2>";
    midFormValue.innerHTML = "<h2>" + userInputArrayModified[3] + "</h2>";
    jungleFormValue.innerHTML = "<h2>" + userInputArrayModified[4] + "</h2>";
})