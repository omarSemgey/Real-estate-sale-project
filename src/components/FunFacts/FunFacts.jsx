import './FunFacts.css'
export default function FunFacts(){
    return(
        <>
        <div className="fun-facts">
            <div className="container">
                <div className="counter">
                    <span className="circle"></span>
                    <div>
                        <h2 className="count-header">34</h2>
                        <p className="count-text"> Buildings  
                        <br />
                        finished Now</p>
                    </div>
                </div>
                <div className="counter">
                    <span className="circle"></span>
                    <div>
                        <h2 className="count-header">12</h2>
                        <p className="count-text"> Years 
                        <br />
                        Experience</p>
                    </div>
                </div>
                <div className="counter">
                    <span className="circle"></span>
                    <div>
                        <h2 className="count-header">24</h2>
                        <p className="count-text"> Awards 
                        <br />
                        Won 2023</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}