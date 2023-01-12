import '../styles/about.css';

const About = () => {
    return (
        <div className="about-container">

            <div className="about-section">
                <div className='about-section-title' id='edu'>
                    <h2>My Education</h2>
                </div>

                <div className='about-section-content'>
                    <div className="about-education">
                        <ul>
                            <li>B.S in Exercise Science from Suny Cortland</li>
                            <ul><li>2018-2022</li></ul>
                            <li>Coding self-study</li>
                            <ul><li>June 2022 - Present</li></ul>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className='about-section-title'>
                    <h2>My Interests</h2>
                </div>

                <div className='about-section-content'>
                    <div className="about-interests">
                     
                        <ul>
                            <li>Weight Lifting - more specifically strength and bodybuilding style training</li>
                            <li>
                                Running - I recently completed my first marathon in 3 hours, 25 minutes, and 22 seconds
                                <ul>
                                    <li> The picture depicted above was captured during the early stages of the race</li>
                                </ul>
                            </li>
                            <li>Wrestling - I wrestled in high school and now I coach at my high school and middle school</li>
                            <li>Watching UFC and college wrestling</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <div className='about-section-title'>
                    <h2>My Goals for the Near Future</h2>
                </div>

                <div className='about-section-content'>
                    <div className="about-goals">
                        <ul>
                            <li>Getting a job as a software engineer</li>
                            <li>Running a sub 3:15:00 marathon</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default About;