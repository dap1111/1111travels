import Link from 'next/link';
import parser from 'html-react-parser';
import { Icon } from '@iconify/react';

export default function PostStyle2({ data }) {
  const { imgUrl, title, comments, postUrl, date } = data;
  return (
    <article className="cs_post cs_style_2 cs_white_bg">
      <Link
        href={postUrl}
        className="cs_post_thumb cs_zoom overflow-hidden position-relative"
      >
        <img src={imgUrl} alt="Post Thumb" className="cs_zoom_in" />
        <div className="cs_posted_by cs_radius_2 cs_fs_16 cs_medium cs_white_color position-absolute">
          {date}
        </div>
        <div className="cs_post_overlay cs_radius_5 position-absolute" />
      </Link>
      <div className="cs_post_info">
        <ul className="cs_post_meta cs_mp0">
          <li>
            <span className="cs_primary_color">
              <Icon icon="fa6-regular:circle-user" />
            </span>
            By<a href="#">admin</a>
          </li>
          <li>
            <span className="cs_primary_color">
              <Icon icon="fa:comment-o" />
            </span>
            <a href="#">{comments} comments</a>
          </li>
        </ul>
        <h2 className="cs_post_title cs_fs_24 cs_semibold">
          <Link href={postUrl}>{parser(title)}</Link>
        </h2>
        <hr />
        <Link
          href={postUrl}
          className="cs_post_btn cs_fs_18 cs_medium cs_primary_color"
        >
          Read More
          <Icon icon="fa6-solid:arrow-right-long" />
        </Link>
      </div>
    </article>
  );
}
