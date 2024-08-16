import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useEffect } from "react";


    const useNowPlayingMovies = () =>{
// fetching data from TMDB movies anfd updazting store
const dispatch = useDispatch();

const getNowPlayingMovies =  async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", OPTIONS);
  const json = await data.json();
  dispatch(addNowPlayingMovies(json.results))
}

useEffect(() => {
  getNowPlayingMovies();
}, []);

    }



export default useNowPlayingMovies;