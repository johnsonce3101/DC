// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(this.response);
//     }
//   };

//   request.open("GET", "./sample.txt");
//   request.send();


///FETCH

// fetch("./sample.txt").then((response) => {
//     console.log(response);
//   });

// const request = new XMLHttpRequest();
// request.onreadystatechange = function () {
//   console.log(this);
// };

// request.open("GET", "./sample.txt");
// request.send();

fetch("http://api.openweathermap.org/data/2.5/weather?q=Duluth&appid=72b3249e19192365ac3eca9334c75e11"
  ).then((response) => {
    //   console.log(response);
 return response.json();

  }). then(body => {
      console.log (body.main.temp)
      document.getElementById('weather').textContent = body.main.temp
  })