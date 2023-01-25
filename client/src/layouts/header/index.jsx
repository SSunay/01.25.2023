import React from 'react'
import { NavLink } from "react-router-dom";
import './index.scss'
const Header = () => {
  return (
    <div className='navBar'>
        <div className='nav'>
         <div className='logopart'>
         <div className='logo'><NavLink to={'/'}><img src="src/images/logo.png" alt="" /></NavLink></div>
            <div className='logotext'><NavLink to={'/'}>COURSES</NavLink></div>
         </div>
            <div className='links'>
                <ul>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/'}>About</NavLink></li>
                    <li><NavLink to={'/'}>Courses</NavLink></li>
                    <li><NavLink to={'/'}>News</NavLink></li>
                    <li><NavLink to={'/'}>Add</NavLink></li>
                </ul>
            </div>
            <div className='phone'><i class="fa-solid fa-phone-volume"></i>+43 4566 7788 2457</div>
        </div>
    </div>
  )
}

export default Header