import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './index.scss'
const Detail = () => {
    const navigate = useNavigate()
    const[detail,setDetail]=useState([])
    const[byId,setById]=useState([])
 const {_id}=useParams()

    const getData=async()=>{
        let data = await axios.get(`http://localhost:8000/users/${_id}`)
        setDetail(await data.data)
    }
useEffect(() => {
getData()
}, [])

//     const deleteData=async(_id)=>{
//         let data = await axios.get(`http://localhost:8000/users/${_id}`)
//         setById(await data.data)
//     }
// useEffect(() => {
//     deleteData()
// }, [])


const handleDelete=(_id)=>{
    axios.delete(`http://localhost:8000/users/${_id}`)
    let newList = detail.filter((q)=>q._id !== _id)
    setDetail(newList)
}    


  return (
    <div className='detail'>
        <div className='detailImg'><img src={detail.img} alt="" /></div>
        <div className='detailText'>
            <h1>title: <br />{detail.title}</h1>
            <p>description: <br />{detail.description}</p>
            <h3>name: <br />{detail.name}</h3>
            <h4>price: <br />{detail.price}$</h4>
        </div>
        <div className='buttons'>
            <button className='delete' onClick={()=>handleDelete(_id)}>Delete</button>
            <button className='Goback' onClick={()=>navigate('/')}>Go back</button>
        </div>
    </div>
  )
}

export default Detail


