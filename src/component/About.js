import React from 'react'
import{Link} from 'react-router-dom'
import  img2 from './Home2.png'

function About() {
  return (
    <div className='MainC' >
      <h4 className='heading4' >Arc <span className='heading4S' >ane</span> </h4>

      <h1 className='heading1' > <span> <u> Na </u> </span> talie Sihombing </h1>

      <h4 className='ServiceS' >Service</h4>
      <h5 className='WD' >Web Development</h5>
      <p className='WDs' >Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. </p>
      <h5 className='UIUX' >UI/UX Designs</h5>
      <p className='UIUXs' >Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. </p>
      <h5 className='WC' >Web Conselting</h5>
      <p className='WCs' >Lorem ipsum dolor sit amet. <br /> Lorem ipsum dolor sit amet. </p>


      <h4 className='WSBIJ' > Web Specialist based in Jakarta </h4>
      <p className='WSBIJ-p1' >Lorem ipsum dolor sit, amet consectetur adipisicing elit.officia nulla voluptatem. Lorem ipsum dolor sit amet consectetur.</p>      <p className='WSBIJ-p2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit.officia nulla voluptatem. Lorem ipsum dolor sit amet consectetur.</p>
      <button className='WSBIJ-btn' > <Link className='WSBIJ-btns' > Hire Me </Link></button>
      
      <p className='Details-1' > <b> 13 Years </b> <br /><span className='DS-1'>Experience</span> </p>
      <p className='Details-2' > <b> 256+ </b> <br /><span className='DS-2'>Quance</span> </p>
      <p className='Details-3' > <b> 99.8% </b> <br /><span className='DS-3'>Satisfaction</span> </p>

      <div>
        <img src={img2} className='Image-2' alt='images'/>
      </div>

    </div>
  )
}

export default About
