import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const VideoTitle = ({title, description}) => {
  return (
    <div className="pt-[20%] absolute bg-gradient-to-r from-black aspect-video">
        <div className="ml-16 text-white">
            <h1 className="text-4xl font-bold mb-3">{title}</h1>
            <p className="text-base mb-2 max-w-[50%]">{description}</p>
            <div className="flex">
                <button className="px-5 py-3 bg-white hover:bg-gray-500 text-black me-2 rounded-md"><FontAwesomeIcon icon={faPlay} /> Play</button>
                <button className="px-5 py-3 bg-gray-500 text-black rounded-md"><FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle;