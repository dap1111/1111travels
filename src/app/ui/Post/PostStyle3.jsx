import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function PostStyle3({ data }) {
  const { imgUrl, date, title, desc, postUrl } = data;
  return (
    <article className="cs_post cs_style_3">
      <Link href={postUrl} className="cs_post_thumb cs_zoom">
        <img src={imgUrl} alt="Post Thumb" className="cs_zoom_in" />
        <span className="cs_link_hover">
          <i>
            <Icon icon="fa:link" />
          </i>
        </span>
      </Link>
      <div className="cs_post_info">
        <div className="cs_post_meta">
          <img src="/images/icons/calendar_icon.svg" alt="Icon" />{' '}
          <span>{date}</span>
        </div>
        <h2 className="cs_post_title cs_fs_24 cs_semibold">
          <Link href={postUrl}>{title}</Link>
        </h2>
        <p className="cs_post_subtitle">{desc}</p>
        <Link
          href={postUrl}
          className="cs_post_btn cs_fs_18 cs_medium cs_accent_color"
        >
          Read More
          <svg
            width={12}
            height={10}
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5.71429L0 4.28571L9 4.28571L6 1.42857L6.75 0L12 5L6.75 10L6 8.57143L9 5.71429L0 5.71429Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
