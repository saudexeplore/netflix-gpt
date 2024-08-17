import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondryContainer = () => {
  const movies = useSelector((store => store.movies))
  return (
    <div className="bg-black -mt-96 z-10 relative">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
      
    </div>
  )
}

export default SecondryContainer;