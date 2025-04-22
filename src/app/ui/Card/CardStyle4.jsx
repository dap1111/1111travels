import Link from 'next/link';
import parser from 'html-react-parser';
import { Icon } from '@iconify/react';

export default function CardStyle4({
  data,
  handleCardHover,
  activeLink,
  index,
}) {
  const { destinationUrl, imgUrl, title } = data;
  return (
    <div
      className={`cs_card cs_style_4 cs_hover_active ${
        activeLink === index ? 'active' : ''
      }`}
      onMouseEnter={() => handleCardHover(index)}
    >
      <Link
        href={destinationUrl}
        className="cs_card_thumb cs_bg_filed"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <Link
        href={destinationUrl}
        className="cs_card_icon cs_center position-absolute"
      >
        <i>
          <Icon icon="fa6-solid:chevron-right" />
        </i>
      </Link>
      <div className="cs_card_in">
        <h2 className="cs_card_title cs_fs_35 cs_white_color mb-0">
          <Link href={destinationUrl}>{parser(title)}</Link>
        </h2>
      </div>
    </div>
  );
}
