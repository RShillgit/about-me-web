import '../styles/projects.css';
import fakebookDemo from '../videos/Fakebook Demo.mp4';
import blogApiDemo from '../videos/Blog API Demo.mp4';
import membersOnlyDemo from '../videos/Members Only Demo.mp4';
import phototagDemo from '../videos/Photo Tag Demo.mp4';

const Projects = () => {
    return (
        <div className="projects-container">

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Fakebook</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='phototagDemo'>
                        <source src={fakebookDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='project-description'>
                    <button className='project-tech-stack' disabled={true}>Node.js</button>
                    <button className='project-tech-stack' disabled={true}>React</button>
                    <button className='project-tech-stack' disabled={true}>CSS</button>
                    <button className='project-tech-stack' disabled={true}>MongoDB</button>
                </div>

                <div className='project-comments'>
                    <p>The demo may take a few moments to spin up</p>
                </div>

                <div className='project-buttons'>
                    <a href='https://github.com/RShillgit/Fakebook' target="_blank" rel="noopener noreferrer">
                        <button>Repo</button>
                    </a>
                    <a href='https://deadpan-meal-production.up.railway.app' target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Blog API</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='blogAPIDemo'>
                        <source src={blogApiDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='project-description'>
                    <button className='project-tech-stack' disabled={true}>Node.js</button>
                    <button className='project-tech-stack' disabled={true}>React</button>
                    <button className='project-tech-stack' disabled={true}>CSS</button>
                    <button className='project-tech-stack' disabled={true}>MongoDB</button>
                </div>

                <div className='project-comments'>
                    <p>The demo may take a few moments to spin up</p>
                </div>

                <div className='project-buttons'>
                    <a href='https://github.com/RShillgit/Blog-Api' target="_blank" rel="noopener noreferrer">
                        <button>Repo</button>
                    </a>
                    <a href='https://rshill-blog-production.up.railway.app/' target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                </div>
            </div>

            <div className='project-example'>

                <div className='project-title'>
                    <h3>Members Only</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='membersOnlyDemo'>
                        <source src={membersOnlyDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='project-description'>
                    <button className='project-tech-stack' disabled={true}>Node.js</button>
                    <button className='project-tech-stack' disabled={true}>CSS</button>
                    <button className='project-tech-stack' disabled={true}>MongoDB</button>
                </div>

                <div className='project-comments'>
                    <p>The demo may take a few moments to spin up</p>
                </div>

                <div className='project-buttons'>
                    <a href='https://github.com/RShillgit/Members-Only' target="_blank" rel="noopener noreferrer">
                        <button>Repo</button>
                    </a>
                    <a href='https://members-only-hfy4.onrender.com' target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Projects;