import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.scss'
const Search = ({setUsers}) => {
    const [name,setName]=useState([])

    const getData=async()=>{
        let data = await axios.get('http://localhost:8000/users/')
        setName(await data.data)
    }
useEffect(() => {
getData()
}, [])

const handleSearch=(e)=>{
    let newdata = name.filter((el)=>
    el.title
    .toLocaleLowerCase()
    .includes(e.target.value.toLocaleLowerCase())
    )
    setUsers(newdata)
}


  return (
    <div className='input'>
        <input type="text" onChange={(e)=>handleSearch(e)} placeholder='Search for fun...'/>
    </div>
  )
}

export default Search