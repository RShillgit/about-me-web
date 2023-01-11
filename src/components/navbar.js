import '../styles/navbar.css';
import homeBtn from '../images/home.png';
/*
    I want this navbar to have a few different links like an about section,
a section for my resume, a section for my contact information, and maybe
a few more.

    I want the links to send you to the page location rather than a new
page.  For example, when you click the contact information, it scrolls down
to the location where my contact information is.

    I also want this navbar to be at the top of the page at all times, even
when you scroll down I want this bar to be accessable.

*/

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

    return (
        <div className="navbar">
            <div className='home-link'>
                <button id='homeBtn' className="navbar-clickable" onClick={buttonClickHandler}>
                    <img id='homeBtnImg' src={homeBtn} alt='Home' />
                </button>   
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