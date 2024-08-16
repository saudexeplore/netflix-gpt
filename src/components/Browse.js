import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'

const Brows = () => {

  useNowPlayingMovies()
  
  return (
    <>
    <Header/>
    <MainContainer />
    <SecondryContainer />
    </>
  )
}

export default Brows