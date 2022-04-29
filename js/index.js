const form = document.getElementById('form');
const apikey = "69d24a2a";
let test1;
let info = document.getElementById("test");

form.addEventListener('submit', (e) =>{
  e.preventDefault()
  const searchInput = document.getElementById("searchInput").value;
  console.log(searchInput);
  getMovies(searchInput);
})

const getMovies = async (i) => {
  fetch(`https://www.omdbapi.com/?s=${i}&plot=full&apikey=${apikey}`).then((data) =>{
    return data.json();
  }).then((data)=>{
    console.log(data);
    let data1 = "";
    data.Search.map((values)=>{
      data1 = `
      <div class="movies p-3">
        <div id="movieApi" class="movie card flex-row">
          <img class="card-img-left" src="${values.Poster}"/>
          <div class="card-body">
            <div class="header">
              <h1>${values.Title}</h1>
            </div>
            <div class="body">
              <p class="text-info">${values.Year}</p>
              <button class="test1 btn btn-primary" id=${values.imdbID}>info</button>
              <p class="text-right">${values.imdbID}</p>
            </div>
          </div>
        </div>
      </div>`
      details(values.imdbID);
      document.getElementById("containerApi").innerHTML += data1;
    });
    test1 = document.querySelectorAll('.test1');
  }).catch((err)=>{
      console.log(err)
  })
}
window.addEventListener('click', (e) => {
  if(e.target.classList.contains("test1")){
    details(e.target.id);
    if (info.style.display === "none") {
      info.style.display = "block";
    }
  } else {
      info.style.display = "none";
    }
})

const details = (id) => {
  fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apikey}&plot=full`)
  .then((data) => {
    return data.json();
  })
  .then((movie) => {
    console.log(movie);
    let data2 = "";
    data2 = `
    <div class="movies p-3">
      <div id="movieApi" class="movie card flex-row">
        <img class="card-img-left" src="${movie.Poster}"/>
        <div class="card-body">
          <div class="header">
            <h1>${movie.Title}</h1>
            <p class="text-info">${movie.Released}</p>
            
          </div>
          <div class="body">
          <p class="text-success">${movie.Plot}</p>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementById("test").innerHTML = data2;
  }).catch((err)=>{
      console.log(err)
  })
}

