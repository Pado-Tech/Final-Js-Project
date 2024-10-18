const apiKey="35262f704cad23cec184b3989344934e"
const trendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
async function fetchtrendingmovies (){
    try {
        const response = await fetch(trendingMovies)
        const data = await response.json()
        console.log(data)
        const movies = data.results
        showtrendingMovies(movies)
    } catch (error) {
        console.log(error)
    }
} 
fetchtrendingmovies()
function showtrendingMovies(movies){
    const trendingcontainer = document.getElementById("trendingmovies")
    trendingcontainer.innerHTML= movies.map(movie=>{
        return `
            <div>
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
            </div>
        `
    }).join("")
}