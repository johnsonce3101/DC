// console.log("Hello World");
// let myLineItems = document.getElementsByTagName('li')[1];
// console.log("My li tags are ", myLineItems);

// document.getElementsByTagName("li")[1].textContent = "Hello Dom"

// const heading = document.getElementById('heading');
// let listItems = document.getElementsByName('li')[1];
// const listItemsByClass = document.querySelector('.nav-link');

// heading.innerText = "Links";
// heading.innerHTML = "Not Links";
// heading.style.color = "blue";

// let newLi = document.createElement("li");
// newLi.textContent = "Im a new li"
// let myList = document.getElementsByTagName('ul')[0]
// myList.appendChild(newLi)

const newHeading = document.createElement('h1');
const newList = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

const rootDiv = document.getElementById('root');

newHeading.textContent = "DOM is alot";
newHeading.style.color = "blue";
newHeading.id = "new-heading";
rootDiv.appendChild(newHeading);

// const heading = document.getElementById('heading');
// heading.textContent = "Toppings"

// const clName = document.getElementById('burger');
// clName.classList.add("list-item")


// let newLi = document.createElement('li');
// newLi.textContent = "Onions"
// let myList = document.getElementsByTagName('ul')[0]
// myList.appendChild(newLi);







