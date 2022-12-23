import '../styles/navbar.css';
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
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-individual-link">
                    <p className="navbar-clickable">About</p>
                </div>
                <div className="navbar-individual-link">
                    <p className="navbar-clickable">Projects</p>
                </div>
                <div className="navbar-individual-link">
                    <p className="navbar-clickable">Contact</p>
                </div>
                <div className="navbar-individual-link">
                    <p className="navbar-clickable" id="navbar-resume">Resume</p>
                </div>
            </div>
        </div>
    )

}
export default NavBar;