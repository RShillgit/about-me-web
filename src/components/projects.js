import '../styles/projects.css';
import battleshipDemo from '../videos/Battleship Demo.mp4';
import phototagDemo from '../videos/Photo Tag Demo.mp4';
import todolistDemo from '../videos/Todo List Demo.mp4';

const Projects = () => {
    return (
        <div className="projects-container">

            <div className='project-example'>
                <div className='project-title'>
                    <h3>
                        <a href='https://github.com/RShillgit/Battleship'>Battleship</a>
                    </h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='battleshipDemo'>
                        <source src={battleshipDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='project-description'>
                    <p>This project was created with...</p>
                    
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>
                        <a href='https://github.com/RShillgit/Todo-List'>Todo List</a>
                    </h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='todolistDemo'>
                        <source src={todolistDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='project-description'>
                    <p>This project was created with...</p>
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>
                        <a href='https://github.com/RShillgit/photo-tag'>Photo Tag</a>
                    </h3>
                </div>
                <div className='project-demo'>
                    <video autoPlay loop muted id='phototagDemo'>
                        <source src={phototagDemo} type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='project-description'>
                    <p>This project was created with...</p>
                </div>
            </div>

        </div>
    )
}
export default Projects;