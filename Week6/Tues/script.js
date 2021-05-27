const form = document.querySelector("form");

function checkName(name) {
myRegex = /[A-Za-z]+/; 
return myregex.test(name);
}

let uName = document.getElementById("uName")
console.log(uName)

uName.addEventListener("input", () => {
    uName.setCustomValidity("No  more than 15");
    uName.checkValidity();
});