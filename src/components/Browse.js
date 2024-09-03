import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  
  return (
    <>
    <Header/>
    {
      showGptSearch ? (<GptSearch />) : 
      (<> 
      <MainContainer />
      <SecondryContainer />
      </>
      )}
    
   
    </>
  )
}

export default Browse