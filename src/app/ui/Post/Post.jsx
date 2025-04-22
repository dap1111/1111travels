import Link from 'next/link';
import parser from 'html-react-parser';

export default function Post({ data }) {
  const { imgUrl, postAuthImg, title, desc, postUrl } = data;
  return (
    <article className="cs_post cs_style_1">
      <Link
        href={postUrl}
        className="cs_post_thumb cs_zoom overflow-hidden position-relative"
      >
        <img src={imgUrl} alt="Post Thumb" className="cs_zoom_in" />
        <div className="cs_posted_by position-absolute">
          <span className="cs_accent_bg cs_white_color">27</span>
          <span className="cs_primary_bg cs_white_color">March 2024</span>
        </div>
      </Link>
      <div className="cs_post_info">
        <div className="cs_post_info_in">
          <div className="cs_post_avatar">
            <div className="cs_avatar_thumb">
              <img src={postAuthImg} alt="Avatar" />
            </div>
            <div className="cs_avatar_info">
              By. <br />
              Admin
            </div>
          </div>
          <h2 className="cs_post_title cs_fs_24 cs_semibold">
            <Link href={postUrl}>{parser(title)}</Link>
          </h2>
          <p className="cs_post_subtitle">{desc}</p>
          <div className="cs_post_btns cs_gray_bg_1">
            <a href="#">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask01"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                >
                  <rect width={20} height={20} fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask01)">
                  <path
                    d="M1.66675 18.3337V3.33366C1.66675 2.87533 1.83008 2.48283 2.15675 2.15616C2.48286 1.83005 2.87508 1.66699 3.33341 1.66699H16.6667C17.1251 1.66699 17.5176 1.83005 17.8442 2.15616C18.1704 2.48283 18.3334 2.87533 18.3334 3.33366V13.3337C18.3334 13.792 18.1704 14.1845 17.8442 14.5112C17.5176 14.8373 17.1251 15.0003 16.6667 15.0003H5.00008L1.66675 18.3337ZM3.33341 14.3128L4.31258 13.3337H16.6667V3.33366H3.33341V14.3128Z"
                    fill="currentColor"
                  />
                </g>
              </svg>{' '}
              Comment(5)
            </a>
            <Link href={postUrl} className="cs_post_btn cs_primary_bg">
              More
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip02)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.15616 4.59014L1.31712 0.0641602C1.24542 0.0224266 1.164 0.000298672 1.08104 0H1.07968C0.996674 0.000329659 0.915216 0.022469 0.843465 0.0641992C0.771208 0.105407 0.711218 0.165101 0.669653 0.237153C0.628087 0.309204 0.606443 0.391019 0.606942 0.474199V9.52607C0.606614 9.60931 0.628283 9.69115 0.669757 9.76332C0.711231 9.83548 0.771035 9.89541 0.843117 9.93703C0.915198 9.97864 0.996997 10.0005 1.08023 10.0003C1.16346 10.0002 1.24518 9.97801 1.3171 9.93611L9.15616 5.41012C9.22813 5.36857 9.2879 5.30881 9.32946 5.23684C9.37101 5.16487 9.39289 5.08323 9.39289 5.00013C9.39289 4.91702 9.37101 4.83538 9.32946 4.76341C9.2879 4.69145 9.22813 4.63168 9.15616 4.59014Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip02">
                    <rect width={10} height={10} fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
