import './Properties.css'
import Cards from '../Cards/Cards'

export default function Properties(){
    return(
        <>
        <div className="properties">
            <div className="container">
                <div className="section-heading">
                    <h6>
                        |PROPERTIES
                    </h6>
                    <h2>
                        We Provide The Best Property You Like
                    </h2>
                </div>
                <Cards></Cards>
            </div>
        </div>
        </>
    )
}