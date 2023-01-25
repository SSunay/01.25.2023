import React from 'react'
import { Carousel } from 'antd';
import './index.scss'
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
const TopPart = () => {
  return (
    <div className='topPart'>
        <div className='mainTopPart'>
        <Carousel autoplay>
    <div className='carusel'>
      <h3 style={contentStyle}><img src="src/images/slider_background.jpg.webp" alt="" /></h3>
      <h1>GET YOUR <span>EDUCATION</span> TODAY</h1>
    </div>
    <div className='carusel'>
      <h3 style={contentStyle}><img src="src/images/slider_background.jpg.webp" alt="" /></h3>
      <h1>GET YOUR <span>EDUCATION</span> TODAY</h1>
    </div  >
    <div className='carusel'>
      <h3 style={contentStyle}><img src="src/images/slider_background.jpg.webp" alt="" /></h3>
      <h1>GET YOUR <span>EDUCATION</span> TODAY</h1>
    </div>
    <div className='carusel'>
      <h3 style={contentStyle}><img src="src/images/slider_background.jpg.webp" alt="" /></h3>
      <h1>GET YOUR <span>EDUCATION</span> TODAY</h1>
    </div>
  </Carousel>
        </div>
    </div>
  )
}

export default TopPart