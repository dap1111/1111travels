import { Icon } from '@iconify/react';
import parser from 'html-react-parser';

export default function IconboxStyle5({ data }) {
  const { icon, title, text } = data;
  return (
    <div className="cs_iconbox cs_style_5 cs_gray_bg cs_radius_5 text-center">
      <div className="cs_iconbox_icon cs_accent_bg cs_white_color cs_center cs_radius_5">
        <Icon icon={icon} />
      </div>
      <h2 className="cs_iconbox_title cs_fs_24 cs_semibold">{title}</h2>
      <p className="cs_iconbox_subtitle mb-0">{parser(text)}</p>
    </div>
  );
}
