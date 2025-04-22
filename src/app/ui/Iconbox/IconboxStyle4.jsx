export default function IconboxStyle4({ imgUrl, title, desc }) {
  return (
    <div className="cs_iconbox cs_style_4">
      <div className="cs_iconbox_icon cs_center">
        <img src={imgUrl} alt="Calendar Icon" />
      </div>
      <h2 className="cs_iconbox_title cs_fs_24 cs_semibold">{title}</h2>
      <p className="cs_iconbox_subtitle mb-0">{desc}</p>
    </div>
  );
}
