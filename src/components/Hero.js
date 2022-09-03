import React from 'react';
import './Hero.css';
import Typewriter from 'typewriter-effect';
import Video from './video/video.mp4';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <video
          className="video"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
        <div className="content">
          <p>Share It Right!</p>
          <p>Through Our Platform You can</p>
          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ['borrow books ', 'purchase books', 'return books '],
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
