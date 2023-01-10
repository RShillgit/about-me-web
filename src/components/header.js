import '../styles/header.css';
import thumbsUp from '../images/marathon-thumbsUp.jpg';
import thumbsUpFullScreen from '../images/marathon-thumbsUp-fullScreen.jpg';
import thumbsUpZoomed from '../images/marathon-thumbs-up-zoomed.jpg';
import raceZoomed from '../images/marathon-zoomed.jpg';
/* 
    I want this section to be an eye catching introduction to my website.

    Maybe add a picture of me from the marathon

    Treat this like a thesis to an essay:
        - Short
        - Sweet
        - To the point
        - Makes the viewer want to continue viewing 
*/

const Header = () => {
    return (
        <div className="header-container">

            <div className="header-content">
                <div className='header-displayedText'>Robert Siciliano</div> 
                <div className='header-revealedText'> 
                    <span> | Aspiring Web Developer</span>
                </div>
            </div>

            <picture className='headerImg'>
                <source media="(max-width: 799px)" srcSet={thumbsUpZoomed} />
                <source media="(min-width: 800px)" srcSet={thumbsUp} />
                <img src={thumbsUp} alt=''/>
            </picture>
        </div>
    )
}   
export default Header;