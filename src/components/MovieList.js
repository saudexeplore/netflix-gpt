import MovieCards from "./MovieCards"


const MovieList = ({title, movies}) => {
    // console.log(movies);
    
  return movies && (
        <div className="p-6">
            <h2 className="text-4xl mt-3 mb-4 text-white font-bold">{title}</h2>
            <div className="flex overflow-x-scroll">
            <div className="flex">
            {movies?.map(movie => <MovieCards key={movie.id} posterPath={movie.poster_path}/>)} 
            </div>  
            </div>         
        </div>
  )
}

export default MovieList;