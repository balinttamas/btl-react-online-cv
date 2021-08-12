import React, { useState } from 'react';
import Wave from 'react-wavify';
import "./contactst.css";
import { db } from './db';

const Contacts = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(false);

    db.collection("contacts")
      .add({
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

return <div className="contact-section" id="contact">
            
            <Wave
        className="wave2"
        paused={false}
        fill={"#A6A6A6"}
        options={{
          height: 20,
          amplitude: 75,
          speed: 0.1,
          points: 5
        
        
        }}
      />

<div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form action="" onSubmit={handleSubmit}>
              <div class="formWord">
                <h2>Contact me!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullName" required value={name}
        onChange={(e) => setName(e.target.value)}/>
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required value={phone}
        onChange={(e) => setPhone(e.target.value)}/>
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="text" name="email" required value={email}
        onChange={(e) => setEmail(e.target.value)}/>
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>
                <br />
                <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
        </div> 

        
        
    };
export default Contacts;