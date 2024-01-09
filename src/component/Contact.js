import React from 'react'
import{ Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact'>
      
    <div className="contact-heading"> <h1>Contact</h1> </div>

    <div className="Form">
    <label className='FN'> First Name </label> <br />
    <input type="text" className='FN-inp' />

    <label className='LN'> Last Name  </label>
    <input type="text" className='LN-inp' />

    <label  className='email'> Email </label>
    <input type="text" className='email-inp' />

    <label className='Last-inp' > How can i help you </label>
    <input type="text" className='LN-inpS'/>

    <button className='submit' > <Link className='submitS' > Submit </Link></button>

    </div>

    

    </div>
  )
}

export default Contact
