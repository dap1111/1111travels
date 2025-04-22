import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import IconboxStyle4 from '../../Iconbox/IconboxStyle4';
import Image from 'next/image';

export default function WhyChooseUsSection({ title, subTitle, imgUrl }) {
  return (
    <>
      <SectionHeading subTitle={subTitle} title={title} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="cs_iconbox_4_wrap">
          <div>
            <div className="row cs_gap_y_45">
              <div className="col-lg-12 col-6">
                <IconboxStyle4
                  imgUrl="/images/icons/calendar_icon_2.svg"
                  title="Set Travel Plan"
                  desc="Distinctively impact client-centered ideas via future-proof
                    paradigms."
                />
              </div>
              <div className="col-lg-12 col-6">
                <IconboxStyle4
                  imgUrl="/images/icons/hotel-icon.svg"
                  title="Luxary Hotel"
                  desc="Distinctively impact client-centered ideas via future-proof
                    paradigms."
                />
              </div>
            </div>
          </div>
          <div>
            <div className="cs_iconbox_4_thumb cs_center">
              <Image src={imgUrl} placeholder="blur" alt="imgUrl" />
            </div>
          </div>
          <div>
            <div className="row cs_gap_y_45">
              <div className="col-lg-12 col-6">
                <IconboxStyle4
                  imgUrl="/images/icons/compass_icon.svg"
                  title="Explore Around"
                  desc="Distinctively impact client-centered ideas via future-proof
                    paradigms."
                />
              </div>
              <div className="col-lg-12 col-6">
                <IconboxStyle4
                  imgUrl="/images/icons/headset_icon.svg"
                  title="Support 24/7"
                  desc="Distinctively impact client-centered ideas via future-proof
                    paradigms."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
