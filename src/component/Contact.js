
import React from "react";
import '../App.css'
import '../Contact.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact=()=>{
    const MySwal = withReactContent(Swal)
   

    // ===============Email Service========================================
    
    
    
       const sendEmail=(e)=>{
         e.preventDefault();
         emailjs.sendForm('service_yi6t5um','template_qkpt26s',e.target,'YXJTYP50K9pAQLZ_r')
           .then(res => console.log(res.status))
           .catch(error => console.log(error));
           e.target.reset()
           
           MySwal.fire({
             title: <strong>Email enviado!</strong>,
             html: <i>Nos pondremos en contacto pronto!</i>,
             icon: 'success'
           })
       }




return(
<section id='contactSection'  className="main-boxContact">  

 <div className="contact-box">

           <div className="tittle-box">
                <p className="h1-text"> Contactanos </p>

            </div>
   <form className="form-box" onSubmit={sendEmail}>

       <div className="box-left">    
          <div>
              <input className="input" type='text' name='user_name' placeholder="Name"></input>
          </div>
        
        
          <div>
             <input className="input" type='text' name='user_subject' placeholder="Subject"></input>
          </div>
    
          <div>
             <input className="input" type='email' name='user_email' placeholder="Email"></input>
          </div>
     </div>
     
     <div className="box-right">    
           <div>
             <textarea className="input-message" name="user_message" placeholder="Send me a message..."></textarea>
            </div>
        
        
     </div>   
    
     <div className="box-submit">
              <button className="submit"> SUBMIT</button>
    </div>

     
</form>

    
    
    </div>
    
</section>
    )
}

export default Contact;