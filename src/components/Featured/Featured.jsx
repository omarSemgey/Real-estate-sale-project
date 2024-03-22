import featured from '../../images/featured.jpg'
import icon from '../../images/featured-icon.png'
import Options from '../Options/Options'
import Table from '../Table/Table'
import './Featured.css'

export default function Featured(){
    return(
        <>
        <div className="featured">
            <div className="container">
                <div className="left-side">
                    <img className='featured-img' src={featured} alt="image"/>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ ">
                    <img src={icon} alt="image"/>
                    </a>
                </div>
                <div className='middle'>
                    <div className='section-heading'>
                    <h6>| Featured</h6>
                    <h2>Best Apartment & Sea View</h2>
                    </div>
                    <Options></Options>
                    </div>
                <Table></Table>
            </div>
        </div>
        </>
    )
}