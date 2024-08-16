import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideos = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US', options", OPTIONS);
      const json = await data.json();
      // console.log(json);
      
      const filterData = json.results.filter((videos) => videos.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      // console.log(trailer);
      dispatch(addTrailerVideo(trailer));
      
    }
  
    useEffect(() => {
      getMovieVideos();
    }, [])
}

export default useMovieTrailer;