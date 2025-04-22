export default function Step({ data }) {
  const { imgUrl, step, title, desc } = data;
  return (
    <div className="cs_step text-center position-relative">
      <div className="cs_step_thumb rounded-circle position-relative">
        <img src={imgUrl} alt="Thumb" className="rounded-circle" />
        <span className="cs_step_number cs_semibold text-white cs_fs_25 rounded-circle cs_accent_bg d-flex align-items-center justify-content-center position-absolute">
          {step}
        </span>
      </div>
      <h2 className="cs_fs_25 cs_semibold">{title}</h2>
      <p className="m-0">{desc}</p>
    </div>
  );
}
