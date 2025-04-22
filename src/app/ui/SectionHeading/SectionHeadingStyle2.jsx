import parser from 'html-react-parser';

export default function SectionHeadingStyle2({ title, subTitle, desc }) {
  return (
    <div className="container">
      <div className={`cs_section_heading cs_style_1`}>
        {subTitle && (
          <h3 className="cs_section_title_up cs_ternary_font cs_accent_color cs_normal cs_fs_24">
            {parser(subTitle)}
          </h3>
        )}
        {title && (
          <h2
            className={`cs_section_title cs_semibold cs_fs_56 mb-0 aos`}
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos="fade-left"
          >
            {parser(title)}
          </h2>
        )}
        {desc && <p className="cs_section_subtitle">{parser(desc)}</p>}
      </div>
    </div>
  );
}
