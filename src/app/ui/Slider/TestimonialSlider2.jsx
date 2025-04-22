import Slider from 'react-slick';
import TestimonialStyle2 from '../Testimonial/TestimonialStyle2';

export default function TestimonialSlider2({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    appendDots: dots => (
      <div>
        <ul className="cs_pagination cs_style_1"> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="cs_slider cs_style_1">
      <div className="cs_slider_container">
        <Slider {...settings} className="cs_slider_wrapper">
          {data?.map((elements, index) => (
            <TestimonialStyle2 data={elements} key={index} />
          ))}
        </Slider>
        <div />
      </div>
    </div>
  );
}
