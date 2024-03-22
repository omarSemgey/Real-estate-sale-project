import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import deal01 from '../../images/deal-01.jpg'
import deal02 from '../../images/deal-02.jpg'
import deal03 from '../../images/deal-03.jpg'
import './BestDeal.css'
export default function BestDeal() {
    function handleButtons(e){
        const id=e.target.id;
        document.querySelectorAll('.bottom').forEach((e)=>{e.classList.remove('available')})
        document.querySelectorAll('.active').forEach((e)=>{e.classList.remove('active')})
        document.getElementsByClassName('house'+id)[0].classList.add('available')
        e.target.className+='active';
    }
    return(
        <>
        <div className="best-deal">
            <div className="container">
                <div className="top">
                    <div className="top-text section-heading">
                        <h6>
                            | best deal
                        </h6>
                        <h2>
                        Find Your Best Deal Right Now!
                        </h2>
                    </div>
                    <div className="top-buttons">
                        <button onClick={(e) => handleButtons(e)} className="active"id='1'>
                            Apartment
                        </button>
                        <button onClick={(e) => handleButtons(e)} id='2'>
                            Villa House
                        </button>
                        <button onClick={(e) => handleButtons(e)} id='3'>
                            Penthouse
                        </button>
                    </div>
                </div>
                <div className="bottom house1 available">
                    <div className="left-side">
                    <div className='best-table'>
                        <ul>
                            <li>
                                Total Flat Space
                                <span>185 m2</span>
                                
                            </li>
                            <li>
                                Floor number
                                <span>26th</span>
                                
                            </li>
                            <li>
                                Number of rooms
                                <span>4</span>
                                
                            </li>
                            <li>
                                Parking Available
                                <span>Yes</span>
                            </li>
                            <li>
                                Payment Process
                                <span>Bank</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="middle">
                    <img src={deal01} alt="" />
                </div>
                <div className="right-side">
                    <h3>
                        Detail Info About Apartment
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                    <br />
                    <br />
                    Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.
                    </p>
                    <dir className='icon-button'>
                        <div className='icon'>
                        <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <a href="/Property">Schedule a visit</a>
                    </dir>
                    </div>
                    </div>
                    <div className="bottom house2 ">
                    <div className="left-side">
                    <div className='best-table'>
                        <ul>
                            <li>
                                Total Flat Space
                                <span>185 m2</span>
                                
                            </li>
                            <li>
                                Floor number
                                <span>26th</span>
                                
                            </li>
                            <li>
                                Number of rooms
                                <span>4</span>
                                
                            </li>
                            <li>
                                Parking Available
                                <span>Yes</span>
                            </li>
                            <li>
                                Payment Process
                                <span>Bank</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="middle">
                    <img src={deal02} alt="" />
                </div>
                <div className="right-side">
                    <h3>
                        Detail Info About Villa
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                    <br />
                    <br />
                    Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.
                    </p>
                    <dir className='icon-button'>
                        <div className='icon'>
                        <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <a href="/Property">Schedule a visit</a>
                    </dir>
                    </div>
                    </div>
                    <div className="bottom house3 ">
                    <div className="left-side">
                    <div className='best-table'>
                        <ul>
                            <li>
                                Total Flat Space
                                <span>185 m2</span>
                                
                            </li>
                            <li>
                                Floor number
                                <span>26th</span>
                                
                            </li>
                            <li>
                                Number of rooms
                                <span>4</span>
                                
                            </li>
                            <li>
                                Parking Available
                                <span>Yes</span>
                            </li>
                            <li>
                                Payment Process
                                <span>Bank</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="middle">
                    <img src={deal03} alt="" />
                </div>
                <div className="right-side">
                    <h3>
                        Detail Info About Villa
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                    <br />
                    <br />
                    Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.
                    </p>
                    <dir className='icon-button'>
                        <div className='icon'>
                        <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <a href="/Property">Schedule a visit</a>
                    </dir>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}