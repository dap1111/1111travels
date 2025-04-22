import Button from '../../Button/Button';

export default function BannerSectionStyle2({ data }) {
  const { imgUrl, title, subTitle, desc, btnUrl } = data;
  return (
    <div className="container">
      <div className="row align-items-center cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_banner_thumb">
            <img src={imgUrl} alt="Offer Text" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cs_banner_text cs_white_color">
            <h2 className="cs_banner_title cs_white_color cs_fs_50">{title}</h2>
            <h3 className="cs_banner_title_mini cs_fs_20 cs_medium cs_white_color">
              {subTitle}
            </h3>
            <p className="cs_banner_subtitle">{desc}</p>
            <Button btnTxt="Read More" btnUrl={btnUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
