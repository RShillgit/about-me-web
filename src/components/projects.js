import '../styles/projects.css';
import fakebookDemo from '../videos/Fakebook Demo.mp4';
import foodLoggerDemo from '../videos/Food Logger Demo.mp4';
import chessDemo from '../videos/Chess Demo Video.mp4';

const Projects = () => {
    return (
        <div className="projects-container">

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Fakebook</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='fakebookDemo'>
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

                <div className='project-summary'>
                    <p>A facebook inspired social media application that allows users to post, like, comment, send messages, update profile information, add friends and more all with their associated CRUD operations.</p>
                    
                </div>

                <div className='project-buttons'>
                    <a href='https://github.com/RShillgit/Fakebook' target="_blank" rel="noopener noreferrer">
                        <button>Repo</button>
                    </a>
                    <a href='https://deadpan-meal-production.up.railway.app' target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                </div>

                <div className='project-comments'>
                    <p>* The demo may take a few moments to spin up</p>
                </div>
            </div>

            <div className='project-example'>

            <div className='project-title'>
                <h3>Food Logger</h3>
            </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='foodLoggerDemo'>
                        <source src={foodLoggerDemo} type="video/mp4" />
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

                <div className='project-summary'>
                    <p>A food/calorie tracking application that allows users to view/add/update/delete food items from their daily food log, edit their daily calorie budget, and view daily macronutrient information.  Each calendar day has its own food log, so users can view logs from previous days or even plan out their meals ahead of time.</p>
                </div>

                <div className='project-buttons'>
                    <a href='https://github.com/RShillgit/Food-Logger' target="_blank" rel="noopener noreferrer">
                        <button>Repo</button>
                    </a>
                    <a href='https://food-logger-production.up.railway.app' target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                </div>

                <div className='project-comments'>
                    <p>* The demo may take a few moments to spin up</p>
                </div>

            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Chess</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='chessDemo'>
                        <source src={chessDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className='project-description'>
                    <button className='project-tech-stack' disabled={true}>React</button>
                    <button className='project-tech-stack' disabled={true}>Typescript</button>
                    <button className='project-tech-stack' disabled={true}>TailwindCSS</button>
                </div>

                <div className='project-summary'>
                    <p>A chess browser game built to practice using technologies like Typescript and TailwindCSS and their integration with react.</p>
                </div>

                <div className='project-buttons'>
                    <a href='https://github.com/RShillgit/Chess' target="_blank" rel="noopener noreferrer">
                        <button>Repo</button>
                    </a>
                    <a href='https://rshillgit.github.io/Chess/' target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                </div>

            </div>

        </div>
    )
}
export default Projects;