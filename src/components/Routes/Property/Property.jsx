import Header from "../../Header/Header";
import BestDeal from "../../BestDeal/BestDeal";
import Table from "../../Table/Table";
import Options from "../../Options/Options";
import PageHeader from "../../PageHeader/PageHeader";
import img from '../../../images/single-property.jpg'
import './Property.css'
export default function Property(){
    return(
        <>
        <div className="Property">
            <Header link="Property"></Header>
            <PageHeader phrase='SINGLE PROPERTY'></PageHeader>
            <div className="property-container container">
                <div className="left-side">
                    <div className="main-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="content">
                        <div className="main-content">
                            <span className="category">Apartment</span>
                            <h4>24 New Street Miami, OR 24560</h4>
                        </div>
                        <p>
                        Get
                        <strong> the best villa agency </strong>
                        HTML CSS Bootstrap Template for your company website. TemplateMo provides you the 
                        <span> best free CSS templates </span>
                        in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                        <br />
                        <br />
                        When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
                        </p>
                        <Options></Options>
                    </div>
                </div>
                <div className="right-side">
                    <Table></Table>
                </div>
            </div>
            <BestDeal></BestDeal>
        </div>
        </>
    )
}