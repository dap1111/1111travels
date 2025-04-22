import Slider from 'react-slick';
import Testimonial from '../Testimonial/Testimonial';

import { Icon } from '@iconify/react';
import { useRef } from 'react';

export default function TestimonialSlider({ data }) {
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
    console.log('clicked next');
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    console.log('clicked prev');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    appendDots: dots => (
      <div>
        <ul className="cs_pagination cs_style_1"> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="position-relative">
      <div className="cs_slider_container">
        <div className="cs_slider_arrows cs_style_1 cs_mobile_hide">
          <div className="cs_left_arrow cs_slider_arrow" onClick={previous}>
            <Icon icon="fa6-solid:arrow-left" />
          </div>
          <div className="cs_right_arrow cs_slider_arrow" onClick={next}>
            <Icon icon="fa6-solid:arrow-right" />
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className="cs_slider_wrapper">
          {data?.map((elements, index) => (
            <Testimonial data={elements} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
