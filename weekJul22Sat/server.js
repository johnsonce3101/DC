const pgp = require("pg-promise")();
const express = require('express');
const db = pgp("postgres://localhost:5432/todo_app");
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

  app.get('/tasks', (req, res) => {
      console.log("Get tasks");
    db.any("SELECT * FROM TASKS").then((tasks) => {res.send(tasks)});
  });
  
 app.post('/tasks', (req, res) => {
     db.none("INSERT INTO TASKS (title, is_completed) values($1, $2)", [
         "Feed the dog",
         false
     ])
    console.log("POST Task")
    res.send("Post success")
 });


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });