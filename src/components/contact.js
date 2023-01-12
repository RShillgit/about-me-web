import '../styles/contact.css';

/*
    Add an animation after clicking submit button that closes the textarea,
    then renders a check mark and a message that says something like,
    "Your message has been sent to Robert.Siciliano22@gmail.com Thank you 
    for viewing my website", then rerenders the textarea.
*/

const Contact = () => {
    return (
        <div className="contact-container">

            <div className="contact-title">
                <h3>Contact Me</h3>
            </div>

            <form className="contact-form">
                <textarea placeholder="Leave A Message"></textarea>
                <button>Message</button>
            </form>

            <div className="contact-extrainfo">
                <p>You can send me a message here or email me directly at Robert.Siciliano22@gmail.com</p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt='Linkedin'/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='Github'/>
            </div>

        </div>
    )
}
export default Contact;