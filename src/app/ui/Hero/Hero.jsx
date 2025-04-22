import parser from 'html-react-parser';
import { Icon } from '@iconify/react';
import SelectDestination from '../SelectOption/SelectDestination';
import SelectGuests from '../SelectOption/SelectGuests';

const destinationOptions = [
  { value: 'Italy', label: 'Italy' },
  { value: 'England', label: 'England' },
  { value: 'France', label: 'France' },
];

const guestsOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
];

export default function Hero({ data }) {
  const { title, subTitle, bgImgUrl } = data;
  return (
    <div
      className="cs_hero cs_style_1 cs_center cs_ripple_activate cs_primary_bg"
      style={{ backgroundImage: `url(${bgImgUrl})` }}
    >
      <div className="container">
        <div className="cs_hero_text text-center">
          {subTitle && (
            <h3
              className="cs_hero_subtitle cs_white_color cs_ternary_font cs_fs_25 cs_normal text-uppercase aos"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos="fade-up"
            >
              {parser(subTitle)}
            </h3>
          )}
          {title && (
            <h1
              className="cs_hero_title cs_white_color cs_fs_100 aos"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              {parser(title)}
            </h1>
          )}
        </div>
        {/* <div
          className="cs_find_form_wrap aos"
          data-aos-duration="800"
          data-aos-delay="600"
          data-aos="fade-up"
        >
          <form action="#" className="cs_find_form">
            <div>
              <input
                type="text"
                className="cs_fs_18 cs_normal cs_hero_input"
                placeholder="Where to?"
              />
            </div>
            <div>
              <SelectDestination
                data={destinationOptions}
                placeholder="Destination"
              />
            </div>
            <div>
              <SelectGuests data={guestsOptions} placeholder="Guests" />
            </div>
            <div>
              <button className="cs_find_btn cs_bold cs_primary_font cs_center">
                <Icon icon="fa6-solid:magnifying-glass" />
                Find Now
              </button>
            </div>
          </form>
        </div> */}
      </div>
      <div className="cs_hero_shape_1" />
      <div className="cs_hero_shape_2" />
      <div className="cs_hero_shape_3" />
    </div>
  );
}
