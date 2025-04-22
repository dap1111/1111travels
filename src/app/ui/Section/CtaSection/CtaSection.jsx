import Button from '../../Button/Button';

export default function CtaSection({ data }) {
  const { title, subTitle, btnUrl, desc, brand } = data;
  return (
    <div className="container">
      <div className="row cs_gap_y_40">
        <div className="col-lg-6">
          <div className="cs_cta_text">
            <h3
              className="cs_cta_title_mini cs_fs_24 cs_medium cs_white_color cs_ternary_font aos"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              {subTitle}
            </h3>
            <h2 className="cs_cta_title cs_fs_56 cs_bold cs_white_color">
              {title}
            </h2>
            <p className="cs_cta_subtitle cs_fs_18 cs_white_color">{desc}</p>
            <Button btnTxt="Read More" btnUrl={btnUrl} />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cs_partners_wrap overflow-hidden">
            <div className="cs_partners">
              {brand?.map((imgUrl, index) => (
                <div className="cs_partner" key={index}>
                  <img src={imgUrl} alt="Brand Logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
