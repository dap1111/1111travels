'use client';
import { useEffect, useState } from 'react';
import Accordion from '../../Accordion/Accordion';

export default function AccordionSection({ data }) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <div className="row cs_gap_y_40 align-items-center">
        <div className="col-xl-6 col-lg-5">
          <div className="cs_adventure_logo_wrap">
            <div className="cs_adventure_logo">
              <img
                src="/images/adventure_logo.svg"
                alt="Logo"
                className="cs_to_rotate"
                style={{ transform: `rotate(${scrollPosition / 10}deg)` }}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <Accordion data={data} />
        </div>
      </div>
    </div>
  );
}
