import React from 'react';
import img from '../images/logo.png'

export default class Brand extends React.Component {
  render() {
    return (
      <span>
        <img className='brand-logo' src={img} alt='logo' />EP Showcase
      </span>
    )
  }
}