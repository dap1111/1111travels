import { Icon } from '@iconify/react';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import Button from '../Button/Button';

export default function AboutInfo({ data, title, subTitle }) {
  const { desc, note, features } = data;
  return (
    <>
      <SectionHeadingStyle2 title={title} subTitle={subTitle} />
      <div className="cs_about_text">
        <p>{desc}</p>
        <p className="mb-0 cs_accent_color cs_medium cs_fs_18">{note}</p>
      </div>
      <ul className="cs_list cs_style_1 cs_mp0 cs_fs_18">
        {features?.map((element, index) => (
          <li key={index}>
            <Icon icon="fa6-solid:circle-check" />
            {element}
          </li>
        ))}
      </ul>
      <Button btnTxt="Read More" btnUrl="/about" varient="cs_style_1" />
    </>
  );
}
