import infoIcon from '../../images/info-icon-01.png'
import infoIcon2 from '../../images/info-icon-02.png'
import infoIcon3 from '../../images/info-icon-03.png'
import infoIcon4 from '../../images/info-icon-04.png'
import './Table.css'
export default function Table(){
    return(
        <>
        <div className='table'>
        <ul>
            <li>
                <img src={infoIcon} alt="" />
                <h4>250 m2
                    <br />
                    <span>Total Flat Space</span>
                </h4>
            </li>
            <li>
                <img src={infoIcon2} alt="" />
                <h4>Contract
                    <br />
                    <span>Contract Ready</span>
                </h4>
            </li>
            <li>
                <img src={infoIcon3} alt="" />
                <h4>Payment
                    <br />
                    <span>Payment Process</span>
                </h4>
            </li>
            <li>
                <img src={infoIcon4} alt="" />
                <h4>Safety
                    <br />
                    <span>24/7 Under Control</span>
                </h4>
            </li>
        </ul>
        </div>
        </>
    )
}