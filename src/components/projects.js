import '../styles/projects.css';
import battleshipDemo from '../videos/Battleship Demo.mp4';
import phototagDemo from '../videos/Photo Tag Demo.mp4';
import todolistDemo from '../videos/Todo List Demo.mp4';

const Projects = () => {
    return (
        <div className="projects-container">

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Battleship</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='battleshipDemo'>
                        <source src={battleshipDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='project-description'>
                    <p>View <a href='https://github.com/RShillgit/Battleship' target="_blank" rel="noopener noreferrer">repository</a></p>
                    <p>Try it out <a href='https://rshillgit.github.io/Battleship/' target="_blank" rel="noopener noreferrer">live</a></p>
                    
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Todo List</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='todolistDemo'>
                        <source src={todolistDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='project-description'>
                    <p>View <a href='https://github.com/RShillgit/Todo-List' target="_blank" rel="noopener noreferrer">repository</a></p>
                    <p>Try it out <a href='https://rshillgit.github.io/Todo-List/' target="_blank" rel="noopener noreferrer">live</a></p>
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Photo Tag</h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='phototagDemo'>
                        <source src={phototagDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='project-description'>
                    <p>View <a href='https://github.com/RShillgit/photo-tag' target="_blank" rel="noopener noreferrer">repository</a></p>
                    <p>Try it out <a href='https://rshillgit.github.io/photo-tag/' target="_blank" rel="noopener noreferrer">live</a></p>
                </div>
            </div>

        </div>
    )
}
export default Projects;