const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=36747cbb26c8db97091b07909c0a620e&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=36747cbb26c8db97091b07909c0a620e&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')




function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie)=>{
        const {title, poster_path, vote_average, overview} = movie
        console.log(movie)

        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')

        movieElement.innerHTML = `        
            <img src="${IMG_PATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${rating(vote_average)}">
                   ${vote_average.toFixed(1)}
                </span>
            </div>
                <div class="overview">
                    <h3>
                        ${overview}
                    </h3>
                </div>       
        `
        main.appendChild(movieElement)
    })

}

function rating(vote){
    if(vote >=8){
        return 'green'
    }else if(vote >=5){
        return 'yellow'
    }else{
        return 'red'
    }
}

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

getMovies(API_URL)



form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const searchTerm = search.value
    console.log(searchTerm)

    if(searchTerm && searchTerm !==""){
        getMovies(SEARCH_API + searchTerm)
        search.value=''
    }else if(!title){ 
        
        main.innerHTML = `<h1>No results</h1>`
        
    }
    
})



