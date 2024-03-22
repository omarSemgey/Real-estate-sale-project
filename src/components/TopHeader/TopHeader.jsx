import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope,faMap } from "@fortawesome/free-regular-svg-icons"
import { faFacebookF,faInstagram,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function TopHeader(){
    return(
        <>
        <div className="top-header">
        <div className="top-container">
        <div className="info">
        <div>
        <FontAwesomeIcon icon={faEnvelope} className="icons"/>
        <span>info@company.com</span>
        </div>

        <div>
        <FontAwesomeIcon icon={faMap} className="icons"/>
        <span>Sunny Isles Beach, FL 33160</span>
        </div>
        </div>

        <div className="links">
        <ul>
            <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FontAwesomeIcon icon={faFacebookF} className="icons"/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FontAwesomeIcon icon={faTwitter} className="icons"/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FontAwesomeIcon icon={faLinkedin} className="icons"/>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <FontAwesomeIcon icon={faInstagram} className="icons"/>
                </a>
            </li>
        </ul>
        </div>
        </div>
        </div>
        </>
    )
}