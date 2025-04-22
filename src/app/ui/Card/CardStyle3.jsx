import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function CardStyle3({ data }) {
  const { imgUrl, packageText, title, location, price, cardUrl } = data;
  return (
    <div className="cs_card cs_style_3 cs_white_bg">
      <Link href={cardUrl} className="cs_card_thumb position-relative cs_zoom">
        <img src={imgUrl} alt="Package Thumb" className="cs_zoom_in" />
        <div className="cs_package_badge cs_fs_18 cs_semibold cs_primary_color cs_primary_font position-absolute">
          {packageText}
        </div>
      </Link>
      <div className="cs_card_content">
        <h2 className="cs_card_title cs_fs_24 cs_semibold">
          <Link href={cardUrl}>{title}</Link>
        </h2>
        <p className="cs_card_subtitle mb-0">
          <i className="cs_accent_color">
            <Icon icon="fa-solid:globe" />
          </i>{' '}
          {location}
        </p>
        <hr />
        <div className="cs_card_action">
          <span className="cs_card_price cs_fs_24 cs_semibold cs_primary_color cs_primary_font mb-0">
            ${price}
          </span>
          <Link
            href={cardUrl}
            className="cs_btn cs_style_1 cs_fs_18 cs_semibold"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
