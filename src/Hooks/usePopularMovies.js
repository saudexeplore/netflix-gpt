
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useEffect } from "react";


    const usePopularMovies = () =>{
// fetching data from TMDB movies anfd updazting store
const dispatch = useDispatch();

const getPopularMovies =  async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", OPTIONS);
  const json = await data.json();
  dispatch(addPopularMovies(json.results))
//   console.log(json.results);
  
}

useEffect(() => {
  getPopularMovies();
}, []);

}



export default usePopularMovies;