
const form = document.getElementById('form');


form.addEventListener('submit', (e) =>{
  e.preventDefault()
  const searchInput = document.getElementById("searchInput").value;
  console.log(searchInput);
  getMovies(searchInput);
})

const getMovies = async (i) => {
fetch(`https://www.omdbapi.com/?s=${i}&plot=full&apikey=69d24a2a`).then((data) =>{
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
          <div class="header"><p>${values.Title}</p></div>
          <div class="body"></div>
        </div>
      </div>
    </div>`
    document.getElementById("containerApi").innerHTML += data1;
  });
}).catch((err)=>{
    console.log(err)
})
}

