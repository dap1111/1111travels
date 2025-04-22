import parser from 'html-react-parser';

export default function BannerSection({ data }) {
  const { title, subTitle, date } = data;
  return (
    <div className="container">
      <div className="cs_banner_text cs_white_color">
        <h2
          className="cs_banner_title cs_white_color cs_fs_56 aos"
          data-aos-duration="800"
          data-aos-delay="400"
          data-aos="fade-left"
        >
          {parser(title)}
        </h2>
        <p className="cs_banner_subtitle cs_fs_18">{parser(subTitle)}</p>
        <div className="cs_banner_review cs_medium">
          <svg
            width={110}
            height={22}
            viewBox="0 0 110 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H20.7736V21.309H0V0Z" fill="#1BB580" />
            <path d="M22.1582 0H42.9318V21.309H22.1582V0Z" fill="#1BB580" />
            <path d="M44.3164 0H65.09V21.309H44.3164V0Z" fill="#1BB580" />
            <path d="M66.4746 0H87.2482V21.309H66.4746V0Z" fill="#1BB580" />
            <path d="M88.6328 0H109.406V21.309H88.6328V0Z" fill="#1BB580" />
            <path
              d="M10.5865 13.8223L13.0471 13.1743L14.0752 16.4669L10.5865 13.8223ZM16.2493 9.56647H11.918L10.5865 5.32812L9.25513 9.56647H4.92383L8.42932 12.1935L7.09791 16.4319L10.6034 13.8048L12.7606 12.1935L16.2493 9.56647Z"
              fill="white"
            />
            <path
              d="M32.7447 13.8223L35.2053 13.1743L36.2334 16.4669L32.7447 13.8223ZM38.4075 9.56647H34.0762L32.7447 5.32812L31.4133 9.56647H27.082L30.5875 12.1935L29.2561 16.4319L32.7616 13.8048L34.9188 12.1935L38.4075 9.56647Z"
              fill="white"
            />
            <path
              d="M54.9049 13.8223L57.3655 13.1743L58.3935 16.4669L54.9049 13.8223ZM60.5676 9.56647H56.2363L54.9049 5.32812L53.5735 9.56647H49.2422L52.7477 12.1935L51.4163 16.4319L54.9218 13.8048L57.079 12.1935L60.5676 9.56647Z"
              fill="white"
            />
            <path
              d="M77.0631 13.8223L79.5237 13.1743L80.5517 16.4669L77.0631 13.8223ZM82.7258 9.56647H78.3945L77.0631 5.32812L75.7317 9.56647H71.4004L74.9059 12.1935L73.5745 16.4319L77.08 13.8048L79.2372 12.1935L82.7258 9.56647Z"
              fill="white"
            />
            <path
              d="M99.2213 13.8223L101.682 13.1743L102.71 16.4669L99.2213 13.8223ZM104.884 9.56647H100.553L99.2213 5.32812L97.8899 9.56647H93.5586L97.0641 12.1935L95.7327 16.4319L99.2382 13.8048L101.395 12.1935L104.884 9.56647Z"
              fill="white"
            />
          </svg>
          {date}
        </div>
      </div>
    </div>
  );
}
