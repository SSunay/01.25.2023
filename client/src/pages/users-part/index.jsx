import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import './index.scss'
import { Link } from 'react-router-dom'
const UsersPart = () => {
    const[user,setUsers]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/users')
        setUsers(await data.data)
    }
useEffect(() => {
getData()
}, [])


  return (
    <div className='userPart'>
       
        <div className='allPart'>
        <div className='line'></div>
        <div className='title'><h1>Popular Courses</h1></div>
        <div className='all'>
            {user.map((el)=>{
               return(
                <Link>
                 <div className='card'>
                    <div className='cardImg'><img src={el.img} alt="" /></div>
                    <div className='cardText'>
                        <h3>{el.title}</h3>
                        <h4>{el.description}</h4>
                    </div>
                    <div className='user'>
                        <div className='usermain'>
                        <div className='userImg'><img src={el.profilImg} alt="" /></div>
                        <div className='userName'>{el.name} <br /><span>Author</span></div>
                        </div>
                        <div className='userprice'><h3>{el.price} $</h3></div>
                    </div>
                </div>
                </Link>
               )
            })}
        </div>
        </div>
    </div>
  )
}

export default UsersPart