import React from 'react'
import './index.scss'
const StaticPart1 = () => {
  return (
    <div className='StaticPart1'>
        <div className='bak'>
        <div className='yellow'></div>
        <div className='white'></div>
        </div>
        <div className='staticAll'>
          <div className='textPart'>
            <h1>Register now and get a discount <span>50% </span> discount until 1 January</h1>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
          </div>
          <div className='formPart'>
            <input type="text" /><br /><br />
            <input type="text" /><br /><br />
            <input type="text" /><br /><br />
            <button>SEARCH COURSE</button>
          </div>
        </div>
    </div>
  )
}

export default StaticPart1