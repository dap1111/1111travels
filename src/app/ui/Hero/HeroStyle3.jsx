import parser from 'html-react-parser';
import Button from '../Button/Button';
import Image from 'next/image';

export default function HeroStyle3({ data, imgUrl }) {
  const { subTitle, title, desc, bgImgUrl } = data;
  return (
    <>
      {/* Start Hero Section */}
      <section
        className="cs_hero cs_style_3 cs_bg_filed"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      >
        <div className="cs_hero_in">
          <div className="cs_hero_img">
            <Image src={imgUrl} alt="Hero Thumb" placeholder="blur" />
          </div>
          <div className="cs_hero_text">
            {subTitle && (
              <h3 className="cs_hero_mini_title cs_fs_25 text-uppercase cs_normal cs_accent_color cs_ternary_font">
                {parser(subTitle)}
              </h3>
            )}
            {title && (
              <h1
                className="cs_hero_title cs_fs_85 cs_semibold text-uppercase aos"
                data-aos-duration="800"
                data-aos-delay="500"
                data-aos="fade-left"
              >
                {parser(title)}
              </h1>
            )}
            {desc && <p className="cs_hero_desc cs_fs_18">{parser(desc)}</p>}
            <Button btnTxt="Read more" btnUrl="/about" />
          </div>
        </div>
        <div className="cs_wave_animation" />
      </section>
      {/* End Hero Section */}
    </>
  );
}
