let secretPenny = document.getElementById("penny")
let inputfield = document.getElementById("inputnumber")
let output = document.getElementById("output")
function findnumber() {
    output.innerHTML = "your number is " +((inputfield.value*2)+12)/5
}
function penny() {
    secretPenny.hidden = false
}