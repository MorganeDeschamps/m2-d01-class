const url = 'http://api.tvmaze.com/search/shows?q='
const urlSingle = `http://api.tvmaze.com/shows/`
let results = []

const textQuery = "umbrella"

const freeTextQuery = fetch(url + textQuery)


function fetchSingleShow(showId){
  const singleMovieQuery = fetch(urlSingle + showId)

  singleMovieQuery
  .then(response => response.json())
  .then(movieData =>{
    console.log("movieData: ",movieData)
    const showDetails = document.getElementById("show-details")
    showDetails.innerHTML = ''
      let title = document.createElement('h3')
      let image = document.createElement('img')
      let description = document.createElement('div')
      title.innerHTML = movieData.name
      image.src = movieData.image.medium
      description.innerHTML = movieData.summary
      showDetails.appendChild(title)
      showDetails.appendChild(image)
      showDetails.appendChild(description)
  }
  )
}



freeTextQuery.then(response => {
    return response.json()
})

.then ((listOfMovies) => {
    console.log("listOfMovies: ",listOfMovies)
listOfMovies.forEach(movie=>{
const movieListElement = document.createElement('h1')
movieListElement.innerText = movie.show.name
movieListElement.addEventListener("click", ()=>fetchSingleShow(movie.show.id))
document.getElementById("shows-list").appendChild(movieListElement) 
    })
  })