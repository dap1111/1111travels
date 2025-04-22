export default function VideoModal({
  isOpenModal,
  videoSrc,
  handelCloseModal,
}) {
  return (
    <div className={`cs_video_popup ${isOpenModal === true ? 'active' : ''}`}>
      <div className="cs_video_popup-overlay" />
      <div className="cs_video_popup-content">
        <div className="cs_video_popup-layer" />
        <div className="cs_video_popup-container">
          <div className="cs_video_popup-align">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={videoSrc} />
            </div>
          </div>
          <div className="cs_video_popup-close" onClick={handelCloseModal} />
        </div>
      </div>
    </div>
  );
}
