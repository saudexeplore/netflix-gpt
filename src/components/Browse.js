import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const Brows = () => {

  useNowPlayingMovies()
  
  return (
    <>
    <Header/>
    </>
  )
}

export default Brows