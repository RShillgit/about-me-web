import '../styles/header.css';
import thumbsUp from '../images/marathon-thumbsUp.jpg';
import thumbsUpZoomed from '../images/marathon-thumbs-up-zoomed.jpg';

const Header = () => {
    return (
        <div className="header-container">

            <div className="header-content">
                <div className='header-displayedText'>Robert Siciliano</div> 
                <div className='header-revealedText'> 
                    <span>Full Stack Developer</span>
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