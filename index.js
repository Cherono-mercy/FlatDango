let films = [];

//Fetching first movie details using fetch()
function firstFilm(){
    fetch(" http://localhost:3000/films/1")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const sidebar = document.getElementById("sidebar");
    
        sidebar.innerHTML = `

        <img src="${data.poster}"/>
        <div class="title"><h3>Title: ${data.title}</h3></div>
        <div class="runtime"><p>Runtime: ${data.runtime} mins.</p></div>
        <div class="showtime"><p>Showtime: ${data.showtime}</p></div>
        <div class="tickets"><p> Available Tickets: ${data.capacity - data.tickets_sold}</p></div>
    
        `
   
    })
}
firstFilm();
