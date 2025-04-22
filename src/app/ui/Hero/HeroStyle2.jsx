import { Icon } from '@iconify/react';
import Button from '../Button/Button';
import parser from 'html-react-parser';
import Rating from '../Rating/Rating';
import Image from 'next/image';

export default function HeroStyle2({ data, imgUrl }) {
  const { subTitle, title, desc } = data;
  return (
    <>
      {/* Start Hero Section */}
      <section className="cs_hero cs_style_2 cs_accent_bg_1">
        <div className="cs_hero_in">
          <div className="cs_hero_img">
            <Image src={imgUrl} alt="Hero Thumb" placeholder="blur" />
          </div>
          <div className="cs_hero_text">
            {subTitle && (
              <h3
                className="cs_hero_mini_title cs_fs_24 cs_semibold cs_accent_color aos "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                {parser(subTitle)}
              </h3>
            )}
            {title && (
              <h1 className="cs_hero_title cs_fs_85 cs_semibold">
                {parser(title)}
              </h1>
            )}
            {desc && <p className="cs_hero_desc cs_fs_18">{parser(desc)}</p>}
            <div className="cs_button_group">
              <Button btnTxt="read more" btnUrl="/about" />
              <div
                className="cs_hero_ratings aos"
                data-aos-duration="800"
                data-aos-delay="400"
                data-aos="fade-left"
              >
                <div className="cs_hero_rating_icon">
                  <img src="/images/icons/google_icon.svg" alt="Icom" />
                </div>
                <div className="cs_rating_container">
                  <Rating ratingNumber={5} />
                  <div className="cs_rating_text cs_fs_25 cs_normal">
                    4.9 Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="animated-icon-wrap">
          <div className="animated-icon">
            <Icon icon="fa6-solid:location-dot" />
          </div>
          <div className="animated-icon">
            <Icon icon="fa:car" />
          </div>
          <div className="animated-icon">
            <Icon icon="fa:plane" />
          </div>
          <div className="animated-icon">
            <Icon icon="fa:globe" />
          </div>
          <div className="animated-icon">
            <Icon icon="fa6-solid:earth-americas" />
          </div>
          <div className="animated-icon">
            <Icon icon="fa:compass" />
          </div>
          <div className="animated-icon">
            <Icon icon="fa:hotel" />
          </div>
        </div>
      </section>
      {/* End Hero Section */}
    </>
  );
}
