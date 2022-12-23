import '../styles/about.css';
/*
    I want this about section to be a large portion of the website.

    I want it to clearly represent the type of person I am:
        - maybe dive a little deeper into my goals and motivation
        - talk about what I want to do in the future after learning to code

        I want an employer to read this page and say "Wow, lets hire him",
    then have one of their colleagues go, "You didnt even look at his experience yet"
*/

const About = () => {
    return (
        <div className="about-container">

            <div className="about-section">
                <div className='about-section-title'>
                    <h3>My Education</h3>
                </div>

                <div className='about-section-content'>
                    <div className="about-education">
                        <p>Degree in Exercise Science...</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className='about-section-title'>
                    <h3>My interests</h3>
                </div>

                <div className='about-section-content'>
                    <div className="about-interests">
                        <p>Fitness Enthusiast...</p>
                    </div>
                    <div className="about-interests">
                        <p>Gamer...</p>
                    </div>
                    <div className="about-interests">
                        <p>Wrestling, MMA...</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className='about-section-title'>
                    <h3>My Goals</h3>
                </div>

                <div className='about-section-content'>
                    <div className="about-goals">
                        <p>Getting a job as a software engineer</p>
                    </div>
                    <div className="about-goals">
                        <p>Running a sub 3:15 marathon...</p>
                    </div>
                    <div className="about-goals">
                        <p>Learning a new martial art</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default About;