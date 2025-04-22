'use client';
import Newslatter from '../Newslatter/Newslatter';
import FooterTextWidget from '../Widget/FooterTextWidget';

export default function Footer({ bgImgUrl, logo }) {
  return (
    <>
      {/* Start footer */}
      <footer
        className="cs_footer cs_style_1 cs_white_color cs_bg_filed cs_primary_bg"
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      >
        <Newslatter title="Subscribe Our Newslatter" />
        <div className="container">
          <div className="cs_footer_main">
            <div className="cs_footer_main_col">
              <FooterTextWidget logo={logo} />
            </div>
            <div className="cs_footer_main_col">
              <div className="cs_footer_widget">
                <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color">
                  Useful Links
                </h3>
                <ul className="cs_menu_widget">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">Activites</a>
                  </li>
                  <li>
                    <a href="">Flights</a>
                  </li>
                  <li>
                    <a href="">Organized Trips</a>
                  </li>
                  <li>
                    <a href="">Hotels</a>
                  </li>
                  <li>
                    <a href="">Booking</a>
                  </li>
                  <li>
                    <a href="">Transfers</a>
                  </li>
                  <li>
                    <a href="">Requests</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cs_footer_main_col">
              <div className="cs_footer_widget">
                <h3 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color">
                  Contact Info
                </h3>
                <ul className="cs_menu_widget">
                  <li>
                    <a href="destination-details.html">
                      Emirates, United Arabian
                    </a>
                  </li>
                  <li>
                    <a href="destination-details.html">
                      Emirates, United Arabian
                    </a>
                  </li>
                  <li>
                    <a href="destination-details.html">New York City, USA</a>
                  </li>
                  <li>
                    <a href="destination-details.html">New York City, USA</a>
                  </li>
                  <li>
                    <a href="destination-details.html">One Bridge, Belguim</a>
                  </li>
                  <li>
                    <a href="destination-details.html">One Bridge, Belguim</a>
                  </li>
                  <li>
                    <a href="destination-details.html">Golden Frame, Dubai</a>
                  </li>
                  <li>
                    <a href="destination-details.html">Golden Frame, Dubai</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="cs_footer_bottom">
            <div className="cs_copyright">
              Copyright © {new Date().getFullYear()} travelpro All rights
              reserved.
            </div>
            <ul className="cs_menu_widget_2 cs_mp0">
              <li>
                <a href="#">Terms of Services</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {/* End footer */}
    </>
  );
}
