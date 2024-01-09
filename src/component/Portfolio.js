import React from 'react'
function Portfolio() {
  return (
    <div className='Main-Portfolio' >
      <div className='GD' >
       <p className='GD-P' > Graphic Design <br /> <span><u>Port</u></span>folio Template </p>

       <p className='GD-T1' >A4/US Letter</p>
       <p className='GD-T2' > <b> 48 </b> pages </p>
       <p className='GD-T3' > <b>4</b> Scheme </p> 
      </div> 

      <div className='Left-P'> 
      <div className='box-Main'>
        <div className='box1'>
        <p  className='box1-edit graphic1'>graphic design</p>
        <h2 > <u className='box1-edit'> Portfolio </u> </h2>
        <div className='box1-C'></div>
        </div>

        <div className='box2'>
        <p className='box2-edit graphic2' > <span className='edits2'>graph</span>ic design</p>
        <h2> <u  className='box2-edit'>  <span className='edit2'> Por<span/></span>tfolio </u> </h2>   
        <div className='box2-C'></div>
        </div> 

        <div className='box3'>
        <p className='box3-edit graphic3'>graphic design</p>
        <h2> <u className='box3-edit'> Portfolio </u> </h2> 
        <div className='box3-C'></div>
        </div>

        <div className='box4'>
        <p className='box4-edit graphic4'>graphic design</p>
        <h2> <u className='box4-edit' > Portfolio </u> </h2> 
        <div className='box4-C'></div>
        </div>
      </div>
      </div>

      

    </div>    
  )
}

export default Portfolio
