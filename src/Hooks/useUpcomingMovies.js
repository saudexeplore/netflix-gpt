
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useEffect } from "react";


    const useUpcomingMovies = () =>{
// fetching data from TMDB movies anfd updazting store
const dispatch = useDispatch();

const getUpcomingMovies =  async () =>{
  const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", OPTIONS);
  const json = await data.json();
  dispatch(addUpcomingMovies(json.results))
//   console.log(json.results);
  
}

useEffect(() => {
    getUpcomingMovies();
}, []);

}



export default useUpcomingMovies;