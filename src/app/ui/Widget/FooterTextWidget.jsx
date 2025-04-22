import { Icon } from '@iconify/react';

export default function FooterTextWidget({ logo }) {
  return (
    <div className="cs_footer_widget">
      <div className="cs_text_widget">
        <img src={logo} alt={logo} />
      </div>
      <ul className="cs_contact_widget mb-0">
        <li>
          <p>Call Us</p>
          <p className="cs_fs_20">+423 5362 42365</p>
        </li>
        <li>
          <p>Mail Us</p>
          <p className="cs_fs_20">hello@travelpro.co</p>
        </li>
        <li>
          <p>Follow Us</p>
          <div className="cs_social_btn cs_style_1 d-flex">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="cs_center"
            >
              <Icon icon="fa-brands:linkedin-in" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="cs_center"
            >
              <Icon icon="fa6-brands:x-twitter" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="cs_center"
            >
              <Icon icon="fa-brands:youtube" />
            </a>
            <a href="https://slack.com/" target="_blank" className="cs_center">
              <Icon icon="fa:slack" />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
