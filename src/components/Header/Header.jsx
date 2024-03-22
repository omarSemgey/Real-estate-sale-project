import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"
import { useEffect } from "react";
import TopHeader from "../TopHeader/TopHeader"
import './Header.css'
export default function Header({link}) {
    const links= document.getElementsByClassName('nav-link');
    useEffect(() => {
        Array.prototype.forEach.call(links, (e) => {
            if(e.id === link){
                e.classList.add('on')
                return;
            }
        })
        },[]);
    function handleMenu(){
        const menu=document.getElementsByClassName('menu')[0];
        const navLinks=document.getElementsByClassName('nav-links')[0];
        if(menu.classList.contains('checked')){
            menu.classList.remove('checked');
            navLinks.classList.remove('nav-active');
        }else{
            menu.classList.add('checked');
            navLinks.classList.add('nav-active');
        }
    }
    window.onscroll = function() {sticky()};
    function sticky(){
        const header = document.getElementsByClassName("header")[0];
    if (window.pageYOffset > header.offsetTop) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }
        return (
        <>
        <TopHeader></TopHeader>
        <div className="header">
            <a href="#" className="logo"><h1>VILLA</h1></a>
        <ul className="nav-links">
            <li>
                <a id="Home" href="/" className="nav-link">
                    Home
                </a>
            </li>
            <li>
                <a id="Properties" href="/Properties" className="nav-link">
                    Properties
                </a>
            </li>
            <li>
                <a id="Property" href="/Property" className="nav-link">
                    Property Details
                </a>
            </li>
            <li>
                <a id="Contact" href="/Contact" className="nav-link">
                    Contact Us
                </a>
            </li>
            <li>
                <div className="icon">
                    <FontAwesomeIcon icon={faCalendar} />
                </div>
                <a id="Visit" href="#" className="nav-link">
                    Schedule a visit
                </a>
            </li>
            
        </ul>
        <div className="drop-down" onClick={handleMenu}>
            <span className="menu">menu</span>
        </div>
        </div>
        </>
    )
}