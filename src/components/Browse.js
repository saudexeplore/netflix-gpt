import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'

const Brows = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  
  return (
    <>
    <Header/>
    <MainContainer />
    <SecondryContainer />
    </>
  )
}

export default Brows