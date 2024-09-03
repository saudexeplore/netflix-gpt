
import Header from "./Header";
import {BACK_IMG } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
const GptSearch = () => {
  return (
    <div className="relative">
      <img
        className="absolute top-0 left-0 h-screen w-screen"
        src={BACK_IMG}
        alt="bg-image"
      />
      <div className="main-container z-10 relative">
        <Header />
        <div className="h-[calc(100vh-125px)] flex items-center justify-center pb-5">
          <GptSearchBar />
          <GptMoviesSuggestion />
        </div>
      </div>
    </div>
  )
}

export default GptSearch