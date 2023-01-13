import { useEffect, useState } from 'react';
import '../styles/contact.css';

/*
    Add an animation after clicking submit button that closes the textarea,
    then renders a check mark and a message that says something like,
    "Your message has been sent to Robert.Siciliano22@gmail.com Thank you 
    for viewing my website", then rerenders the textarea.
*/

const Contact = () => {

    const [messageText, setMessageText] = useState('');

    // Disable/Enable message button
    useEffect(() => {

        const sendMessageBtn = document.getElementById('sendMessageBtn');
        
        // If there is no message, disable send button
        if (messageText.length === 0) sendMessageBtn.disabled = true;
        
        // If there is a message, enable send button
        else if (messageText.length > 0) sendMessageBtn.disabled = false;

    }, [messageText]);

    const handleTextAreaChange = (e) => {
        e.preventDefault();
        setMessageText(e.target.value);
    }

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(messageText);
    }

    return (
        <div className="contact-container">

            <div className="contact-title">
                <h3>Contact Me</h3>
            </div>

            <form className="contact-form">
                <textarea onChange={handleTextAreaChange} placeholder="Leave me a meessage"/>
                <div className='sendMessageDiv'>
                    <button id='sendMessageBtn' onClick={sendMessage}>Message</button>
                </div>
            </form>
            
        </div>
    )
}
export default Contact;