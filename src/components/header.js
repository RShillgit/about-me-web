import '../styles/header.css';
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
        </div>
    )
}   
export default Header;