import '../styles/navbar.css';
import homeBtn from '../images/home.png';
import moon from '../images/moon.png';
import sun from '../images/sun.png';

const NavBar = () => {

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

        // Home
        if (e.target.id === 'homeBtnImg') scrollIntoViewWithOffset('.header-container');

        // About
        else if (e.target.innerHTML === 'About') scrollIntoViewWithOffset('.about-container');

        // Projects
        else if (e.target.innerHTML === 'Projects') scrollIntoViewWithOffset('.projects-container');
        
        // Contact
        else if (e.target.innerHTML === 'Contact') scrollIntoViewWithOffset('.contact-container');

        // Resume
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

    return (
        <div className="navbar">
            <div className='left-links'>
                <button id='homeBtn' className="navbar-clickable" onClick={buttonClickHandler}>
                    <img id='homeBtnImg' src={homeBtn} alt='Home' />
                </button>  

                <div className='light-dark-mode' onClick={lightDarkClickHandler}>
                    <input type="checkbox" id='light-dark-checkbox'/>
                    <label htmlFor="light-dark-checkbox" className="light-dark-label">
                        <img src={moon} id='moon' alt='dark'/>
                        <img src={sun} id='sun' alt='light'/>
                        <div className='toggle-slider'/>
                    </label>
                </div>
            </div>
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
        </div>
    )

}
export default NavBar;