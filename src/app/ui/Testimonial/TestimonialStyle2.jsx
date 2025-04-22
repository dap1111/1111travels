export default function TestimonialStyle2({ data }) {
  const { imgUrl, authName, authDesignation, title, desc } = data;
  return (
    <div className="cs_feedback cs_style_1 cs_radius_5 position-relative">
      <div className="cs_feedback_avatar">
        <div className="cs_avatar_thumb cs_radius_5 overflow-hidden">
          <img src={imgUrl} alt="Avatar" />
        </div>
        <div className="cs_avatar_info">
          <h3 className="cs_avatar_title cs_fs_24 cs_medium cs_secondary_font">
            {authName}
          </h3>
          <p className="cs_avatar_subtitle cs_accent_color mb-0">
            {authDesignation}
          </p>
        </div>
      </div>
      <div>
        <blockquote className="cs_fs_24 cs_medium cs_secondary_font cs_primary_color">{`"${title}"`}</blockquote>
        <p className="mb-0">{desc}</p>
      </div>
    </div>
  );
}
