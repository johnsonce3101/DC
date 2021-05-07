function add(a, b) {
    console.log(a+b);
    return a + b;
  }
  add(5, 4);

function subtract(x, y) {
    console.log(x - y);
    return x - y;
}
subtract (10, 1);

const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

console.log(todos[0]);

console.log(todos[1]);

console.log( `I have ${todos.length} things to do. `);

todos.push("go to sleep");

console.log( `I have ${todos.length} things to do. `);

const theLastItem = todos.pop();
console.log(theLastItem);

const todoString = todos.join('! ');
console.log(todoString);

const todoString = 'pet the cat! go to work! shop for groceries! go home! feed the cat';

const todos = todoString.split('! ');
console.log(todos);

let n = 1;
while (n <= 10) {
        console.log(n);
        n = n + 1;