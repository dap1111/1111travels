'use client';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import CardStyle4 from '../../Card/CardStyle4';
import { useState } from 'react';

export default function DestinationSectionStyle2({ title, subTitle, data }) {
  const [activeLink, setActiveLink] = useState(0);
  const handleCardHover = index => {
    setActiveLink(index);
  };
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="cs_card_4_list">
          {data?.map((elements, index) => (
            <CardStyle4
              key={index}
              data={elements}
              activeLink={activeLink}
              index={index}
              handleCardHover={handleCardHover}
            />
          ))}
        </div>
      </div>
    </>
  );
}
