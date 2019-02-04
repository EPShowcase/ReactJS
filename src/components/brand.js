import React from 'react';
import img from '../images/logo.png'

const brandStyle = {
  height: '40px',
  marginRight: '10px'
}

const Brand = props => {
  return (
    <span>
      <img style={brandStyle} className='brand-logo' src={img} alt='logo' />EP Showcase
    </span>
  )
}

export default Brand;