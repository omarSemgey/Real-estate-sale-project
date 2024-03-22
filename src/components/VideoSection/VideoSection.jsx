import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import videoFrame from '../../images/video-frame.jpg';
import './VideoSection.css'
export default function Video() {
    return (  
        <>
        <div className="video-section">
        <div className="container">
            <div className="section-heading">
                <h6>| video view</h6>
                <h2>Get Closer View & Different Feeling</h2>
            </div>
        </div>
        </div>
        <dir className='video'>
            <div className='container'>
            <img src={videoFrame} alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
            </a>
            </div>
        </dir>
        </>
    );
}

