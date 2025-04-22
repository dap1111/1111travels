import Link from 'next/link';
import Button from '../Button/Button';
import { Icon } from '@iconify/react';

export default function Card({ data, variant }) {
  const { imgUrl, location, duration, rating, price, cardUrl, title } = data;
  return (
    <div
      className="cs_card cs_style_1 cs_bg_filed cs_radius_5 position-relative"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="cs_card_overlay cs_radius_5 position-absolute w-100 h-100" />
      <div
        className={`cs_card_content position-absolute ${
          variant ? variant : ''
        }`}
      >
        <div className="cs_card_meta cs_white_color">
          <div>
            <Icon icon="fa6-solid:location-dot" />
            <span>{location}</span>
          </div>
          <div>
            <Icon icon="fa:clock-o" />
            <span>{duration}</span>
          </div>
          <div>
            <Icon icon="fa6-solid:star" />
            <span> {rating}+ Rating</span>
          </div>
        </div>
        <h2 className="cs_card_title cs_fs_24 cs_medium cs_white_color">
          <Link href={cardUrl}>{title}</Link>
        </h2>
        <div className="cs_card_action">
          <Button btnTxt="Book Now" btnUrl={cardUrl} />
          <span className="cs_card_price cs_fs_24 cs_medium cs_white_color mb-0">
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}
