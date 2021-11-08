import { useState } from 'react';
import './contactus-styles.css';

const Contact = () => {

    let [name,setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

   const validateEmail = (mail) => {
    const regex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if(!mail || regex.test(mail) === false){
        console.log("Email is not valid");
        console.log("Email tested: "+ mail);
        return false;
    }
    return true;
   }


    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log("Email : " + event.target.value);
        
        if(validateEmail(String(event.target.value).toLowerCase())) {
            console.log("ok");
        } else {
            console.log("not ok");
        }
        
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    return (
        <>
            <div id="contactus" className="section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 bg-dark text-light text-center p-5">
                            <h3>Get in touch</h3>
                            <p>After checking my portfolio you want to get in touch? I can completely understand you, go ahead please...</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-6 col-12 d-block d-lg-none pb-5">
                            <form className="col-12">
                                <legend>CONTACT ME</legend>
                                <input type="text"  className="col-12 pt-2 pb-2 mb-4" name="name" id="name" placeholder="Enter your Name" value={name} onChange={handleNameChange}/>
                                <input type="email"  className="col-12 pt-2 pb-2 mb-4" name="email" id="email" placeholder="Enter a valid email address" value={email} onChange={handleEmailChange}/>
                                <textarea name="message" id="message" className="col-12 pt-2 pb-2" rows="10" placeholder="Enter your message" value={message} onChange={handleMessageChange}></textarea>
                                <button className="submitBtn">SUBMIT</button>
                            </form>
                        </div>
                        <div className="col-md-6 col-12 m-2 m-md-0">
                            <legend>LOCATION</legend>
                            <p className="pb-5"><strong>Debrecen, Hungary<br/>+36301234567</strong></p>
                            <legend className="pt-5">FOLLOW ME</legend>
                            <div className="social-media-icons">
                                <a className="social-media-icons p-1" href="https://www.instagram.com/bakoslaszlo77/" target="_blank"><i className="fab fa-lg fa-instagram"></i></a>
                                <a className="social-media-icons p-1" href="https://www.linkedin.com/in/laszlobakos/" target="_blank"><i className="fab fa-lg fa-linkedin"></i></a>
                                <a className="social-media-icons p-1" href="https://www.behance.net/laszlobakos" target="_blank"><i className="fab fa-lg fa-behance-square"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 d-none d-lg-block">
                            <form className="col-12">
                                <legend>CONTACT ME</legend>
                                <input type="text"  className="col-12 pt-2 pb-2 mb-4" name="name" id="name" placeholder="Enter your Name" value={name} onChange={handleNameChange}/>
                                <input type="email"  className="col-12 pt-2 pb-2 mb-4" name="email" id="email" placeholder="Enter a valid email address" value={email} onChange={handleEmailChange}/>
                                <textarea name="message" id="message" className="col-12 pt-2 pb-2" rows="10" placeholder="Enter your message" value={message} onChange={handleMessageChange}></textarea>
                                <button className="submitBtn">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Contact;