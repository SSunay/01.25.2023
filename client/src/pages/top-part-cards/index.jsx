import React from 'react'
import './index.scss'
const TopPartcards = () => {
  return (
    <div className='TopPartcards'>
        <div className='allCards'>
            <div className='card'>
                <div className='icon'><img src="src/images/earth-globe.svg" alt="" /></div>
                <div className='txt'>
                    <h1>Online Courses</h1>
                    <h5>VIEW MORE</h5>
                </div>
            </div>
            <div className='card'>
            <div className='icon'><img src="src/images/books.svg" alt="" /></div>
                <div className='txt'>
                    <h1>Our Library</h1>
                    <h5>VIEW MORE</h5>
                </div>
            </div>
            <div className='card'>
            <div className='icon'><img src="src/images/professor.svg" alt="" /></div>
                <div className='txt'>
                    <h1>Our Teachers</h1>
                    <h5>VIEW MORE</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopPartcards