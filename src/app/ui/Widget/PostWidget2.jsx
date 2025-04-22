import Link from 'next/link';

export default function PostWidget2({ data, title }) {
  return (
    <div className="cs_post_widget">
      <h3 className="cs_widget_title cs_fs_24 cs_semibold">{title}</h3>
      <ul className="cs_recent_posts cs_mp0">
        {data?.map((elements, index) => (
          <li key={index}>
            <article className="cs_recent_post">
              <Link
                href={elements.distinationUrl}
                className="cs_recent_post_thumb cs_zoom"
              >
                <img
                  src={elements.imgUrl}
                  alt="Post Thumb"
                  className="cs_zoom_in w-100 h-100 object-fit-cover"
                />
              </Link>
              <div className="cs_recent_post_info">
                <h3 className="cs_recent_post_title cs_fs_18 cs_medium">
                  <Link href={elements.distinationUrl}>{elements.title}</Link>
                </h3>
                <div className="cs_recent_post_meta">
                  <span>{elements.location}</span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
