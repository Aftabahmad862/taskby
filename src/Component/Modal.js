import React from "react";
import "./Modal.css";

function ModalfromComponent({setmodal }) {


  return (
    
    
    
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
        <body>

  <div class="wrapper">
 
    <h2>CONTACT US</h2>
    <form action="" method="POST">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" name="Name" id="name" placeholder="First and Last" required minlength="3" maxlength="25" />
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" name="Email" id="email" placeholder="email@domain.tld" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea name="Message" id="message" rows="5" placeholder="Type your message here...."></textarea>
      </div>
      <div class="form-group">
       
        <button type="submit" class="submit"><i class="far fa-paper-plane"></i>Send</button>
    
        <button type="submit" onClick={()=>setmodal(false)} class="submit"><i class="far fa-paper-plane"></i>Cancel</button>
      </div>
    </form>
  </div>
</body>
        </div>
      </div>
    </div>
  );
}

export default ModalfromComponent;