import parser from 'html-react-parser';

export default function PageHeader({ title, subTitle, bgImgUrl }) {
  return (
    <section
      className="cs_page_header cs_bg_filed cs_primary_bg"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <div className="container">
        <div className="cs_page_header_text text-center">
          <h1
            className="cs_page_title cs_fs_70 cs_white_color cs_bold aos"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos="fade-up"
          >
            {title && parser(title)}
          </h1>
          <p
            className="cs_page_subtitle cs_fs_24 mb-0 aos"
            data-aos-duration="800"
            data-aos-delay="500"
            data-aos="fade-up"
          >
            {subTitle && parser(subTitle)}
          </p>
        </div>
      </div>
    </section>
  );
}
