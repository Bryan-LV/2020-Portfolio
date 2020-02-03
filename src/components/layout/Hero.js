import React from 'react'
import PropTypes from 'prop-types';
import ProfileImg from '../../imgs/viewpoint-profile-cropped.jpg';

export default function Hero(props) {
  return (
    <section className="section section--2col hero" id="hero">
      <div className="section__group">
        <h1 className="section__title section__title--light">Hi, I am <br/> <span className="section__title--bold">Bryan Almaraz</span></h1>
        <h3 className="section__subtitle section--box section--code section--darkgreen hero--subtitle">FULL-STACK DEV</h3>
      </div>
      <div className="section__profile-img">
        <img className="section__img section__img--dropshadow" src={ProfileImg} alt=""/>
      </div>
    </section>
  )
}
