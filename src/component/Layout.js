import React from 'react'
import{ Outlet, Link } from 'react-router-dom'
import './Style.css'
function Layout() {
  return (
    <div>
     <nav className='flex'>
            <img src="https://logodownload.org/wp-content/uploads/2014/07/gol-logo-0-300x300.png" alt="" width={100} />
        <ul className='ul-1'>
            <li>    <Link to="/" className='Home1' >Home</Link>                 </li>
            <li>    <Link to="/About" className='About1' >About</Link>           </li>
            <li>    <Link to="/Portfolio" className='Portfolio1' >Portfolio</Link>   </li>
            <li>    <Link to="/Contact" className='Contact1' >Contact</Link>       </li>
        </ul>
        <div>
            <button className='Hire' ><Link to="/Hire" className='Hire1' >Hire Me</Link></button>
        </div>
     </nav>
     <Outlet />
    </div>
  )
}

export default Layout
