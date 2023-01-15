import { useEffect, useState } from 'react';
import '../styles/contact.css';
import $ from 'jquery';

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

        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/40d582f7bb072e4fd2d7517923fb5b8c',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                message: messageText
            },
            success: (data) => console.log(data),
            error: (err) => console.log(err)
         });
    }


    return (
        <div className="contact-container">

            <div className="contact-title">
                <h3>Contact Me</h3>
            </div>

            <form className="contact-form" action="https://formsubmit.co/40d582f7bb072e4fd2d7517923fb5b8c" method="POST">
                
                {/* Honeypot */}
                <input type="text" name='_honey' style={{display: 'none'}}/>

                {/* Disable Captcha */}
                <input type='hidden' name='_captcha' value='false'/>

                <input type="hidden" name="_next" value="localhost:3000"></input>

                <textarea onChange={handleTextAreaChange} placeholder="Leave me a meessage" name='Message'/>
                <div className='sendMessageDiv'>
                    <button type='submit' id='sendMessageBtn' onClick={sendMessage}>Message</button>
                </div>
            </form>
            
        </div>
    )
}
export default Contact;