import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Team({ data }) {
  const { title, subTitle, imgUrl } = data;
  return (
    <div className="cs_team cs_style_1 position-relative">
      <div className="cs_team_thumb cs_zoom overflow-hidden">
        <img src={imgUrl} alt="Team Thumb" className="cs_zoom_in" />
      </div>
      <div className="cs_team_info text-center position-absolute">
        <h2 className="cs_team_title cs_fs_24 cs_medium cs_white_color">
          {title}
        </h2>
        <p className="cs_team_subtitle cs_white_color">{subTitle}</p>
        <div className="cs_social_btns">
          <Link href="">
            <Icon icon="fa:facebook-f" />
          </Link>
          <Link href="">
            <Icon icon="fa:twitter" />
          </Link>
          <Link href="">
            <Icon icon="fa:instagram" />
          </Link>
          <Link href="">
            <Icon icon="fa6-brands:linkedin-in" />
          </Link>
        </div>
      </div>
    </div>
  );
}
