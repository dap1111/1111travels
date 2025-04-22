'use client';
import { useState } from 'react';
import VideoModal from '../../VideoModal/VideoModal';
import VideoBlock from '../../VidoeBlock/VideoBlock';

export default function VideoSection({ data }) {
  const { videoUrl } = data;

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
      <VideoBlock data={data} handelOpenModal={handelOpenModal} />
      <VideoModal
        isOpenModal={toggle}
        videoSrc={videoSrc}
        handelCloseModal={handelCloseModal}
      />
    </>
  );
}
