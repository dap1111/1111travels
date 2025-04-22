export default function Testimonial({ data }) {
  const { imgUrl, name, designation, desc } = data;
  return (
    <div className="cs_testimonial cs_style_2 cs_white_bg position-relative">
      <blockquote className="cs_fs_18">{desc}</blockquote>
      <div className="cs_testimonial_avatar">
        <div className="cs_avatar_thumb">
          <img src={imgUrl} alt="Avatar" />
        </div>
        <div className="cs_avatar_info">
          <h3 className="cs_avatar_title cs_fs_24 cs_medium">{name}</h3>
          <p className="cs_avatar_subtitle cs_accent_color mb-0">
            {designation}
          </p>
        </div>
      </div>
      <div className="cs_quote_shape position-absolute">
        <img src="/images/quote_shape.svg" alt="Quote Shape" />
      </div>
    </div>
  );
}
