import React from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';
// import Video from './video/video.mp4';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        {/* <video
          className="video"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        /> */}
        <img
          className="planets"
          srcset="https://cdn.svgator.com/images/2021/10/solar-system-animation.svg 400w, 
                 https://cdn.svgator.com/images/2021/10/solar-system-animation.svg 800w,
                 https://cdn.svgator.com/images/2021/10/solar-system-animation.svg 1200w,
                 https://cdn.svgator.com/images/2021/10/solar-system-animation.svg 1600w"
          src="https://cdn.svgator.com/images/2021/10/solar-system-animation.svg"
          alt=""
        />
        <div className="content">
          <p>Lorem ipsum</p>
          <p>Do quis minim mollit id minim enim veniam occaecat.</p>
          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ['tagline-1 ', 'tagline-2', 'tagline-3'],
              }}
            />
          </p>
          <LinkR to="/books">
            <button className="btn btn-gradient" type="button">
              Get Started
            </button>
          </LinkR>
        </div>
        <LinkS to="books" spy={true} smooth={true} offset={-70} duration={500}>
          <div className="scroll-down" />
        </LinkS>
      </div>
    </>
  );
};

export default Hero;
