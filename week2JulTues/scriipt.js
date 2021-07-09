// const dns = require('dns')
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Domain Name: ", function (url) {
//     readline.close();
//     dns.lookup(url, function (error, address) {
//         if (error) {
//             console.log(error.message);
//             return;
//         }
//         console.log("IP Address: ", address);
//     })
// });



// const fs = require('fs');
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('filename: ', function(filename) {
//   readline.close();
//   fs.readFile(filename, function(error, buffer) {
//     if (error) {
//       console.log(error.message);
//       return;
//     }
//     const content = buffer.toString();
//     const upperCased = content.toUpperCase();
//     console.log(upperCased);
//   });
// });

// const fs = require("fs");
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Input file: ", function (inputFile) {
//   fs.readFile(inputFile, function (error, buffer) {
//     if (error) {
//       console.log(error.message);
//       readline.close();
//       return;
//     }
//     readline.question("Output file: ", function (outputFile) {
//       readline.close();
//       const content = buffer.toString();
//       const upperCased = content.toUpperCase();
//       fs.writeFile(outputFile, upperCased, function (error) {
//         if (error) {
//           console.log(error.message);
//           return;
//         }
//         console.log("Wrote to file ", outputFile);
//       });
//     });
//   });
// });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const db = require('./db')

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/friends', (req,res) => {
    let htmlData = `<ul>`;
    for (let friend of db) {
        htmlData += `<li>
        <a href="/friends/${friend.handle}">${friend.name}
        </li>`
    }
    htmlData += `</ul>`;
    res.send(htmlData);


});

app.get('/friends/:handle', (req, res) => {
    const {handle} = req.params;
    const friend = db.find(f => f.handle === handle);
    if (friend) {
        let htmlData = ``;
        htmlData += `<h1>${friend.name}</h1>`;
        htmlData += `<h3>${friend.handle}</h1>`;
        htmlData += `<h3>${friend.skill}</h1>`;
        res.send(htmlData);
    } else {
        res.status(404)
            .send(`nope not here ${handle}`)
    }
});