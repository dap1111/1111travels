import AboutInfo from '../../About/AboutInfo';
import Image from 'next/image';

export default function AboutSection({ data, title, subTitle, imgUrl }) {
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-5">
          <Image src={imgUrl} alt="about-img" placeholder="blur" />
        </div>
        <div className="col-lg-6 offset-lg-1">
          <AboutInfo data={data} title={title} subTitle={subTitle} />
        </div>
      </div>
    </div>
  );
}
