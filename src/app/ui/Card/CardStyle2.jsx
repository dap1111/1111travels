import Link from 'next/link';

export default function CardStyle2({ data }) {
  const { imgUrl, title, placeAndTrip, cardUrl } = data;
  return (
    <Link
      href={cardUrl}
      className="cs_card cs_style_2 cs_zoom position-relative cs_radius_8"
    >
      <div className="cs_card_thumb w-100 h-100">
        <img src={imgUrl} alt="Card Image" className="w-100 h-100 cs_zoom_in" />
      </div>
      <div className="cs_card_content position-absolute">
        <h2 className="cs_card_title cs_fs_35 cs_medium cs_white_color">
          {title}
        </h2>
        <p className="cs_card_subtitle cs_fs_18 cs_medium cs_white_color mb-0">
          {' '}
          {placeAndTrip}{' '}
        </p>
      </div>
    </Link>
  );
}
