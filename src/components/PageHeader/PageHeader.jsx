import './PageHeader.css'
export default function PageHeader({phrase}){
    return(
        <>
        <div className="page-heading">
            <div className="container">
                <span className="category"> <a href="/">Home</a> / {phrase}</span>
                <h3>
                    {phrase}
                </h3>
            </div>
        </div>
        </>
    )
}