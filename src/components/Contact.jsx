import "../styles/Contact.css"

const Contact = () => {
    return ( 
        <div name="contact" className="form-div common-width">
             <div className="contact-heading-div">
                    <p>Contact</p>
                    <p>Submit the form below or shoot me an email - rishi.rn818@gmail.com</p>
                </div>
            <form method="POST" action="https://getform.io/f/afc0bcd4-149c-4089-a290-d92706295967">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email"/>
                <textarea name="message" rows="8" placeholder="Message"></textarea>
                <div className="submit-btn"><button>Let's Collaborate</button></div>
            </form>
        </div>
     );
}
 
export default Contact;