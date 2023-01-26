import { useEffect, useState } from 'react';
import '../styles/contact.css';
import $ from 'jquery';
import check from '../images/check.png';

/*
    Add an animation after clicking submit button that closes the textarea,
    then renders a check mark and a message that says something like,
    "Your message has been sent to Robert.Siciliano22@gmail.com Thank you 
    for viewing my website", then rerenders the textarea.
*/

const Contact = () => {

    const [messageText, setMessageText] = useState('');
    const [messageSentConfirmation ,setMessageSentConfirmation] = useState('');

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
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },  
            // If email is successful, 
            success: () => {
                messageSentAnimation();
            },
            error: (err) => console.log(err)
         });
    }

    const messageSentAnimation = () => {

        // Toggle 'sent' class on textarea to render animation
        const textArea = document.querySelector('.messageTextArea');
        textArea.classList.toggle('sent');

        // After 1 second (the duration of the animation)
        setTimeout(() => {

            //  Render confirmation message
            setMessageSentConfirmation(
                <div className='messageSentConfirmation'>
                    <h4>Message Sent to Robert.Siciliano22@gmail.com!</h4>
                    <img src={check} alt=''/>
                </div>
            )

            // Remove textarea 
            textArea.style.display = 'none';

            // Remove 'sent' class
            textArea.classList.toggle('sent');
        }, 1000)

        // After 4 seconds
        setTimeout(() => {

            // Remove convfirmation message
            setMessageSentConfirmation('')

            // Reset the message text
            setMessageText('');
            textArea.value = '';

            // Rerender text area
            textArea.style.display = 'block';
        }, 4000)
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

                <textarea className='messageTextArea' onChange={handleTextAreaChange} placeholder="Leave me a meessage" name='Message'/>
                
                {messageSentConfirmation}

                <div className='sendMessageDiv'>
                    <button type='submit' id='sendMessageBtn' onClick={sendMessage}>Message</button>
                </div>
            </form>
            
        </div>
    )
}
export default Contact;