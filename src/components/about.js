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
                        <label>
                            B.S. in Exercise Science from SUNY Cortland 2018-2022
                            <ul><li>2018-2022</li></ul>
                        </label>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className='about-section-title'>
                    <h3>My Interests</h3>
                </div>

                <div className='about-section-content'>
                    <div className="about-interests">
                        <label>
                            I Enjoy
                            <ul>
                                <li>Weight Lifting - more specifically strength and bodybuilding style training</li>
                                <li>Running - I recently completed my first marathon in 3:25:22</li>
                                <li>Wrestling - I wrestled in high school and am currently coaching at the same school</li>
                                <li>Watching the UFC and college Wrestling</li>
                            </ul>
                        </label>
                        
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className='about-section-title'>
                    <h3>My Goals for the Near Future</h3>
                </div>

                <div className='about-section-content'>
                    <div className="about-goals">
                        <p>Getting a job as a software engineer</p>
                        <p>Running a sub 3:15:00 marathon</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default About;