import '../styles/projects.css';
import battleshipDemo from '../videos/Battleship Demo.mp4';
import phototagDemo from '../videos/Photo Tag Demo.mp4';
import todolistDemo from '../videos/Todo List Demo.mp4';

/*
    This section will have sections for a few of my best projects.

    Each section will have a title, a live video of the project, and a description

*/

const Projects = () => {
    return (
        <div className="projects-container">

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
                    <p>This project was created with...</p>
                </div>
            </div>

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
                    <p>This project was created with...</p>
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
                    <p>This project was created with...</p>
                </div>
            </div>

        </div>
    )
}
export default Projects;