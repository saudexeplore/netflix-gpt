import {IMG_CDN_PATH} from '../utils/constant'

    const MovieCards = ({posterPath}) => {
  return (
    <div className='w-52 mx-3'>
        <img alt="Movie" src={IMG_CDN_PATH+posterPath} />
    </div>
  )
}

export default MovieCards