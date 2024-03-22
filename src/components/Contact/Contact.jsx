import phoneIcon from '../../images/phone-icon.png'
import emailIcon from '../../images/email-icon.png'
import map from '../../images/map.png'
import './Contact.css'
export default function Contact(){
    return(
        <>
        <div className="contact-section">
            <div className="container">
                <div className="section-heading">
                    <h6>| CONTACT US</h6>
                    <h2>Get In Touch With Our Agents</h2>
                </div>
            </div>
        </div>
        <div className="contact-content">
            <div className="container">
                <div className='left'>
                <div className="map">
                    <img src={map} alt="" />
                </div>
                <div className="information">
                    <div className="panel">
                        <img src={phoneIcon} alt="" />
                        <h6>
                            010-020-0340
                            <br />
                            <span>phone number</span>
                        </h6>
                    </div>
                    <div className="panel">
                        <img src={emailIcon} alt="" />
                        <h6>
                            info@villa.co
                            <br />
                            <span>Business Email</span>
                        </h6>
                    </div>
                </div>
                </div>
                <form className="form" method="post">
                    <label htmlFor="user">Full Name</label>
                    <input type="text" placeholder="Your Name..." id="user"/>
                    <label htmlFor="email"> Email Address </label>
                    <input type="text" id="email" placeholder="Your E-mail..." required/>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" placeholder="Subject..."  required/>
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id="message" placeholder="Message..." required/>
                    <div className="main-button"><a href="#">Send image</a></div>
                </form>
            </div>
        </div>
        </>
    )
}