import { useState } from 'react';
import VideoModal from '../../VideoModal/VideoModal';
import VideoBlockStyle2 from '../../VidoeBlock/VideoBlockStyle2';

export default function VideoSectionStyle2({ videoUrl, title }) {
  const [videoSrc, setVideoSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handelOpenModal = () => {
    setVideoSrc(`${videoUrl}`);
    setToggle(!toggle);
  };

  const handelCloseModal = () => {
    setVideoSrc('about:blank');
    setToggle(!toggle);
  };

  return (
    <>
      <VideoBlockStyle2 handelOpenModal={handelOpenModal} title={title} />
      <VideoModal
        isOpenModal={toggle}
        videoSrc={videoSrc}
        handelCloseModal={handelCloseModal}
      />
    </>
  );
}
