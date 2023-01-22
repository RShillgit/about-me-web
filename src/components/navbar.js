import '../styles/navbar.css';
import { useEffect, useState } from 'react';
import homeBtn from '../images/home.png';
import moon from '../images/moon.png';
import sun from '../images/sun.png';
import menu from '../images/menu.png';

const NavBar = () => {

    const [navbarLinks, setNavbarLinks] = useState('');
    const [navbarSmall, setNavbarSmall] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    // On mount
    useEffect(() => {

        // If initial screen width is over 500px, create normal navbar
        if(window.innerWidth >= 500) {
            setNavbarLinks(
                <div className="navbar-links">
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" onClick={buttonClickHandler}>About</button>
                    </div>
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" onClick={buttonClickHandler}>Projects</button>
                    </div>
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" onClick={buttonClickHandler}>Contact</button>
                    </div>
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" id="navbar-resume" onClick={buttonClickHandler}>Resume</button>
                    </div>
                </div>
            )
        }
        // If its under 500px, set navbarSmall state to true to render options menu
        else if (window.innerWidth < 500) setNavbarSmall(true);

        // Monitor window resize
        window.onresize = () => navbarMenuMonitor();

    }, []);

    // On navbarSmall state change
    useEffect(() => {

        const navbar = document.querySelector('.navbar');

        // If navbarSmall is false, set links to normal format
        if(navbarSmall === false) {
            setNavbarLinks(
                <div className="navbar-links">
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" onClick={buttonClickHandler}>About</button>
                    </div>
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" onClick={buttonClickHandler}>Projects</button>
                    </div>
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" onClick={buttonClickHandler}>Contact</button>
                    </div>
                    <div className="navbar-individual-link">
                        <button className="navbar-clickable" id="navbar-resume" onClick={buttonClickHandler}>Resume</button>
                    </div>
                </div>
            );

            // Remove condensed class to navbar
            navbar.classList.toggle('condensed');
        }

        // else if navbarSmall is true, set links to condensed format
        else if (navbarSmall === true) {
            setNavbarLinks(
                <div className="navbar-links condensed">
                    <button className="navbar-clickable" id='optionsMenu' onClick={displayOptions}>
                        <img src={menu} alt='Menu'/>
                    </button>
                    <div className='navbar-condensed-dropdown'>
                        <div className="navbar-individual-link">
                            <button className="navbar-clickable" onClick={buttonClickHandler}>About</button>
                        </div>
                        <div className="navbar-individual-link">
                            <button className="navbar-clickable" onClick={buttonClickHandler}>Projects</button>
                        </div>
                        <div className="navbar-individual-link">
                            <button className="navbar-clickable" onClick={buttonClickHandler}>Contact</button>
                        </div>
                        <div className="navbar-individual-link">
                            <button className="navbar-clickable" id="navbar-resume" onClick={buttonClickHandler}>Resume</button>
                        </div>
                    </div>
                </div>
            );

            // Add condensed class to navbar
            navbar.classList.toggle('condensed');
        }
    }, [navbarSmall])

    // Monitors change in viewport width
    const navbarMenuMonitor = () => {

        // If the width is less than 500px 
        if (window.innerWidth < 500) setNavbarSmall(true);

        // If the width is more than 500px
        else if (window.innerWidth >= 500) setNavbarSmall(false);
        
    }

    // Calculates where to scroll
    const scrollIntoViewWithOffset = (selector) => {

        const vh = window.innerHeight;
        const offset = vh * 0.09;

        return window.scrollTo({
          behavior: 'smooth',
          top:
            document.querySelector(selector).getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            offset,
        })
      }

    const buttonClickHandler = (e) => {

        const openOptionsMenu = document.querySelector('.navbar-condensed-dropdown.open');
        // Remove options menu if it is there
        if (openOptionsMenu) openOptionsMenu.classList.toggle('open');  

        // Home
        if (e.target.id === 'homeBtnImg') scrollIntoViewWithOffset('.header-container');

        // About
        else if (e.target.innerHTML === 'About') { 
            scrollIntoViewWithOffset('.about-container');
        }

        // Projects
        else if (e.target.innerHTML === 'Projects') {
            scrollIntoViewWithOffset('.projects-container');
        }
        
        // Contact
        else if (e.target.innerHTML === 'Contact') {
            scrollIntoViewWithOffset('.contact-container');
        }

        // Resume
        else if (e.target.id === 'navbar-resume') {
            window.open('https://docs.google.com/document/d/1WVmV5dWgfPK7tkENVJei2R3YrxCxqCBkKU8thlsU9Hg/edit?usp=sharingb')
        }
    }

    const lightDarkClickHandler = (e) => {
        e.preventDefault();

        const checkbox = document.getElementById('light-dark-checkbox');

        // Check/Uncheck checkbox and toggle light/dark mode respectively
        if (checkbox.checked === false) {
            document.body.classList.toggle('dark');
            return checkbox.checked = true;
        }
        else {
            document.body.classList.toggle('dark');
            return checkbox.checked = false;
        }
        
    }

    // Displays dropdown menu on devices < 500px wide
    const displayOptions = () => {
       
        // Get the base options menu div
        const optionsMenu = document.querySelector('.navbar-condensed-dropdown');        

        // If the options menu exists, toggle the open class
        if(optionsMenu) optionsMenu.classList.toggle('open');
        
    }

    return (
        <div className="navbar">
            <div className='left-links'>
                <button id='homeBtn' className="navbar-clickable" onClick={buttonClickHandler}>
                    <img id='homeBtnImg' src={homeBtn} alt='Home' />
                </button>  

                <div className='light-dark-mode' onClick={lightDarkClickHandler}>
                    <input type="checkbox" id='light-dark-checkbox' disabled/>
                    <label htmlFor="light-dark-checkbox" className="light-dark-label">
                        <img src={moon} id='moon' alt='dark'/>
                        <img src={sun} id='sun' alt='light'/>
                        <div className='toggle-slider'/>
                    </label>
                </div>
            </div>

            {navbarLinks}

        </div>
    )

}
export default NavBar;