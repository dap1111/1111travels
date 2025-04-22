import Button from '../../Button/Button';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';
import Image from 'next/image';

export default function AboutSectionStyle3({ data, title, subTitle, imgUrl }) {
  const { circleImgUrl, desc, btnUrl } = data;
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_about_thumb position-relative">
            <Image src={imgUrl} alt="About Thumb" placeholder="blur" />
            <div className="cs_about_img_sm position-absolute">
              <img src={circleImgUrl} alt="Rotating Logo" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cs_about_info">
            <SectionHeadingStyle2 title={title} subTitle={subTitle} />
            <div className="cs_height_28 cs_height_lg_20" />
            <p className="cs_about_text">{desc}</p>
            <Button btnTxt="Read More" btnUrl={btnUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
