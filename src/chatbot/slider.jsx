import React from 'react';
import Slider from 'react-slick';
import { CardLogo } from '../cards/CardLogo';
import './slider.css'; // The CSS file that contains the styles for the slider
import { kaspi_prompt_style, halyk_prompt_style } from '../cards/styles';

const CardSlider = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    className: 'cards-slider',
    initialSlide: 0
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <CardLogo style={kaspi_prompt_style}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;