import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function PostStyle5({ data }) {
  const { imgUrl, title, date, postUrl, desc } = data;
  return (
    <article className="cs_post cs_style_5">
      <Link href={postUrl} className="cs_post_thumb cs_zoom">
        <img src={imgUrl} alt="Post Thumb" className="w-100 h-100 cs_zoom_in" />
        <span className="cs_link_hover">
          <i>
            <Icon icon="fa:link" />
          </i>
        </span>
      </Link>
      <ul className="cs_post_meta cs_mp0 cs_primary_color">
        <li className="cs_accent_color">{date}</li>
        <li>
          By{' '}
          <a href="#" className="cs_accent_color">
            JOHN ALEX
          </a>
        </li>
      </ul>
      <h2 className="cs_post_title cs_fs_35 cs_semibold">
        <Link href={postUrl}>{title}</Link>
      </h2>
      <div className="cs_post_subtitle">{desc}</div>
      <Link
        href={postUrl}
        className="cs_post_btn cs_fs_18 cs_medium cs_primary_color"
      >
        <span>Continue Reading</span>
        <Icon icon="fa6-solid:arrow-right-long" />
      </Link>
    </article>
  );
}
