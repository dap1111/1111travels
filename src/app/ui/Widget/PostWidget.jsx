import Link from 'next/link'

export default function PostWidget() {
  return (
    <div className="cs_sidebar_item cs_gray_bg">
      <h3 className="cs_sidebar_widget_title cs_fs_24 cs_semibold">
        Popular Post
      </h3>
      <hr />
      <ul className="cs_recent_posts cs_mp0">
        <li>
          <article className="cs_recent_post">
            <Link href="/blogs/blog-details"
              className="cs_recent_post_thumb cs_zoom"
            >
              <img
                src="/images/latest_post_1.jpeg"
                alt="Post Thumb"
                className="cs_zoom_in w-100 h-100 object-fit-cover"
              />
            </Link>
            <div className="cs_recent_post_info">
              <h3 className="cs_recent_post_title cs_fs_16 cs_medium cs_secondary_font">
                <Link href="/blogs/blog-details">
                  How to Modify Your Car engine Properly?
                </Link>
              </h3>
              <div className="cs_recent_post_date cs_fs_14">
                October 01, 2024
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="cs_recent_post">
            <Link href="/blogs/blog-details"
              className="cs_recent_post_thumb cs_zoom"
            >
              <img
                src="/images/latest_post_2.jpeg"
                alt="Post Thumb"
                className="cs_zoom_in w-100 h-100 object-fit-cover"
              />
            </Link>
            <div className="cs_recent_post_info">
              <h3 className="cs_recent_post_title cs_fs_16 cs_medium cs_secondary_font">
                <Link href="/blogs/blog-details">
                  Top 10 New Car Available in our Showroom
                </Link>
              </h3>
              <div className="cs_recent_post_date cs_fs_14">
                October 01, 2024
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="cs_recent_post">
            <Link href="/blogs/blog-details"
              className="cs_recent_post_thumb cs_zoom"
            >
              <img
                src="/images/latest_post_3.jpeg"
                alt="Post Thumb"
                className="cs_zoom_in w-100 h-100 object-fit-cover"
              />
            </Link>
            <div className="cs_recent_post_info">
              <h3 className="cs_recent_post_title cs_fs_16 cs_medium cs_secondary_font">
                <Link href="/blogs/blog-details">
                  How to Cool Your Car Engine Emidietly
                </Link>
              </h3>
              <div className="cs_recent_post_date cs_fs_14">
                October 01, 2024
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="cs_recent_post">
            <Link href="/blogs/blog-details"
              className="cs_recent_post_thumb cs_zoom"
            >
              <img
                src="/images/latest_post_4.jpeg"
                alt="Post Thumb"
                className="cs_zoom_in w-100 h-100 object-fit-cover"
              />
            </Link>
            <div className="cs_recent_post_info">
              <h3 className="cs_recent_post_title cs_fs_16 cs_medium cs_secondary_font">
                <Link href="/blogs/blog-details">
                  Classification of Car Wash Type By Service
                </Link>
              </h3>
              <div className="cs_recent_post_date cs_fs_14">
                October 01, 2024
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  )
}
