import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import './Slider.css'

export default function slider(){
    const [activeSlide, setActiveSlide] = useState(1);
    function handleNav(arrow){
        if(arrow === 'next'){
            activeSlide === 3  ? setActiveSlide(1) : setActiveSlide(activeSlide+1);
        }else{
            activeSlide === 1 ? setActiveSlide(3) : setActiveSlide(activeSlide-1);
        }
        const slides=document.querySelectorAll('.slide');
        slides.forEach((e) =>{e.classList.remove('working')});
        for(let i=0; i < slides.length; i++){
            if(i+1 === activeSlide){
                slides[i].classList.add('working')
            }
        }
    }
    function  handleDots(dot){
        setActiveSlide(dot);
        const dots=document.querySelectorAll('.slider-dot');
        dots.forEach((e)=>e.classList.remove('active'));
        for(let i=0; i < dots.length; i++){
            if(i === dot-1){
                    dots[i].classList.add('active')
            }
        }
    }
    return(
        <>
            <div className="slider">
                <div className="images">
                    <div className="slide-container">
                        <div className="slide slide1 working">
                                <div className="slider-text">
                                    <span className="category">Tonto,<em>canada</em></span>
                                    <h2>
                                        HURRY!
                                        <br/>
                                        GET THE BEST VILLA FOR YOU
                                    </h2>
                                </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide slide2">
                                <div className="slider-text">
                                    <span className="category">Tonto,<em>canada</em></span>
                                    <h2>
                                        HURRY!
                                        <br/>
                                        GET THE BEST VILLA FOR YOU
                                    </h2>
                                </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide slide3">
                                <div className="slider-text">
                                    <span className="category">Tonto,<em>canada</em></span>
                                    <h2>
                                        HURRY!
                                        <br/>
                                        GET THE BEST VILLA FOR YOU
                                    </h2>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="slider-nav">
                    <button className="next"  onClick={() =>handleNav('next')}><FontAwesomeIcon icon={faAngleRight} className="icon"/></button>
                    <button className="prev" onClick={() =>handleNav('prev')}><FontAwesomeIcon icon={faAngleLeft} className="icon"/> </button>
                </div>
                <div className="slider-dots">
                <button className="slider-dot active" onClick={()=>handleDots(1)}><span></span></button>
                <button className="slider-dot" onClick={()=>handleDots(2)}><span></span></button>
                <button className="slider-dot" onClick={()=>handleDots(3)}><span></span></button>
                </div>
            </div>
        </>
    )
}