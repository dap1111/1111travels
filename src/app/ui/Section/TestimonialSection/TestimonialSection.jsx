import TestimonialSlider2 from '../../Slider/TestimonialSlider2';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Image from 'next/image';

export default function TestimonialSection({
  data,
  title,
  subTitle,
  desc,
  imgUrl,
}) {
  return (
    <div className="container cs_large">
      <div className="row cs_gap_y_40">
        <div className="col-lg-6">
          <SectionHeadingStyle2 subTitle={subTitle} title={title} />
          <div className="cs_height_20 cs_height_lg_20" />
          <p className="cs_section_text mb-0">{desc} </p>
          <div className="cs_height_40 cs_height_lg_30" />
          <TestimonialSlider2 data={data} />
        </div>
        <div className="col-lg-6">
          <div className="cs_testimonial_thumb cs_radius_5 overflow-hidden position-relative">
            <Image
              src={imgUrl}
              alt="Testimonial Thumb"
              className="w-100 h-100 object-fit-cover"
              placeholder="blur"
            />
            <div className="cs_shape_1 position-absolute" />
            <div className="cs_shape_2 position-absolute">
              <img src="/images/Quote.png" alt="Quote" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
