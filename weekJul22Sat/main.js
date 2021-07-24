const pgp = require("pg-promise")();
console.log("PGP is ", pgp);

const db = pgp("postgres://localhost:5432/todo_app")
console.log("DB is", db);

let myTasks = db.any("SELECT * from TASKS").then((tasks) => console.log(tasks));

let taskTwo = db.any("SELECT * from TASKS Where id = 2").then( tasks => console.log (tasks));

let insertTask = db.none("INSERT INTO Tasks (title, is_completed) VALUES ($1, $2);", ["feed the deer", false]);
