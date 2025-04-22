import SectionHeading from '../../SectionHeading/SectionHeading';
import TestimonialSlider from '../../Slider/TestimonialSlider';
import Spacing from '../../Spacing/Spacing';

export default function TestimonialSection2({ data }) {
  return (
    <>
      <SectionHeading
        subTitle="OUR TESTIMONIAL"
        title="What Our Clients Says"
        variant="text-center"
      />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <TestimonialSlider data={data} />
      </div>
    </>
  );
}
