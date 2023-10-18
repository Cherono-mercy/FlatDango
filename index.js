//Declaring global variables
let films = [];
let firstFilm = [];


//Function to fetch all films
function fetchFilms() {
  fetch(" http://localhost:3000/films")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      films = data;
      displayFilmNames();
    });
}
fetchFilms();

//Function to display list of films
function displayFilmNames() {
  let list = document.getElementById("list");
  films.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("filmList");
    newDiv.innerHTML = `
         <div onclick="displayFilmInfo" class="title">${value.title}</div>`;

    list.appendChild(newDiv);
  });
}

//Getting the first film in the list
function fetchFirstFilm() {
  fetch(" http://localhost:3000/films/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      firstFilm = data;
      displayFirstFilm(data);
    });
}
fetchFirstFilm();


//Displaying details of the first film
function displayFirstFilm() {
  const sidebar = document.getElementById("sidebar");

  sidebar.innerHTML = `
    <img src="${firstFilm.poster}"/>
    <div>Title: ${firstFilm.title}</div>
    <div>Runtime: ${firstFilm.runtime} mins</div>
    <div>Showtime: ${firstFilm.showtime}</div>
    <div id="tickets">Available Tickets: ${firstFilm.capacity - firstFilm.tickets_sold}</div>
    <button>Buy Ticket</button>
    `;
}


