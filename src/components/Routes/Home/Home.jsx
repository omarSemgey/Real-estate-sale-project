import BestDeal from "../../BestDeal/BestDeal";
import Contact from "../../Contact/Contact";
import Featured from "../../Featured/Featured";
import FunFacts from "../../FunFacts/FunFacts";
import Properties from "../../Properties/Properties";
import Slider from "../../Slider/Slider";
import VideoSection from "../../VideoSection/VideoSection";
import Header from "../../Header/Header";


export default function Home(){
    return(
        <>
        <Header link='Home'></Header>
        <Slider></Slider>
        <Featured></Featured>
        <VideoSection></VideoSection>
        <FunFacts></FunFacts>
        <BestDeal></BestDeal>
        <Properties></Properties>
        <Contact></Contact>
        </>
    )
}