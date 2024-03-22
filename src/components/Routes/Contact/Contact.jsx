import Header from "../../Header/Header";
import PageHeader from "../../PageHeader/PageHeader";
import phoneIcon from '../../../images/phone-icon.png'
import emailIcon from '../../../images/email-icon.png'
import map from '../../../images/msp2.png'
import './Contact.css'
export default function Contact(){
    return(
        <>
            <Header link="Contact"></Header>
            <PageHeader phrase='CONTACT US'></PageHeader>
            <div className="contact-us">
                <div className="container">
                    <div className="top">
                        <div className="left">
                            <div className="section-heading">
                                <h6>| CONTACT US</h6>
                                <h2>Get In Touch With Our Agents</h2>
                            </div>
                            <p>
                            When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                            </p>
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
                        <div className="right">
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
                    <div className="">
                        <div className='bottom'>
                        <div className="map">
                            <img src={map} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}