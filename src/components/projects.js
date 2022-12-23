import '../styles/projects.css';

/*
    This section will have sections for a few of my best projects.

    Each section will have a title, a live video of the project, and a description

*/

const Projects = () => {
    return (
        <div className="projects-container">

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Project 1</h3>
                </div>
                <div className='project-demo'>
                    <p>Demo video of the project</p>
                </div>
                <div className='project-description'>
                    <p>This project was created with...</p>
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Project 2</h3>
                </div>
                <div className='project-demo'>
                    <p>Demo video of the project</p>
                </div>
                <div className='project-description'>
                    <p>This project was created with...</p>
                </div>
            </div>

            <div className='project-example'>
                <div className='project-title'>
                    <h3>Project 3</h3>
                </div>
                <div className='project-demo'>
                    <p>Demo video of the project</p>
                </div>
                <div className='project-description'>
                    <p>This project was created with...</p>
                </div>
            </div>

        </div>
    )
}
export default Projects;