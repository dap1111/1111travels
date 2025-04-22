export default function IconboxStyle2({ data }) {
  const { imgUrl, title, desc } = data;
  return (
    <div className="cs_iconbox cs_style_2 text-center">
      <div className="cs_iconbox_icon cs_radius_15 cs_center">
        <img src={imgUrl} alt="Featured Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_24 cs_bold">{title}</h2>
      <p className="cs_iconbox_subtitle mb-0">{desc}</p>
    </div>
  );
}
