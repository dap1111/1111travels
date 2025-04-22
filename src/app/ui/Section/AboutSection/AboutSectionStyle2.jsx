import AboutInfo from '../../About/AboutInfo';
import Image from 'next/image';

export default function AboutSectionStyle2({ data, title, subTitle, imgUrl }) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <AboutInfo data={data} title={title} subTitle={subTitle} />
        </div>
        <div className="col-lg-5 offset-lg-1">
          <Image src={imgUrl} alt="about-img" placeholder="blur" />
        </div>
      </div>
    </div>
  );
}
