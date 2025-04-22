export default function Funfact({ data }) {
  const { number, suffix, title } = data;
  return (
    <div className="cs_funfact cs_style_1 text-center">
      <h3 className="cs_funfact_title cs_fs_40 cs_semibold cs_accent_color">
        <span>{number}</span>
        {suffix}
      </h3>
      <p className="cs_funfact_subtitle mb-0 cs_fs_18">{title}</p>
    </div>
  );
}
