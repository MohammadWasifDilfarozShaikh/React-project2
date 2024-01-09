import React from 'react'
import{ Link } from 'react-router-dom'
import img1 from './Home1.png'

function Home() {
  return (
    <div>
        <div className='fixed-icon'>
          <i className="fa-brands fa-xl fa-linkedin"></i>
          <i className="fa-brands fa-xl fa-facebook"></i>
          <i className="fa-brands fa-xl fa-instagram"></i>
        </div>
        <div className='headingM' >
            <h1>I'm Web Developer <br/> Natalie E. Watson</h1>
        </div>

        <div className='paraM' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus suscipit perspiciatis <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti labore fugiat placeat cum ex <br /> fuga dolores sunt beatae nisi maiores nesciunt culpa, non saepe quos fugit. </p>
        </div>
        
        <div>
            <button className='LearnM' > <Link className='LearnMs' > Learn more  </Link></button>
        </div>

        <div>
        <img src={img1} className='Image-1' alt='images'/>
        </div>

    </div>
  )
}

export default Home
