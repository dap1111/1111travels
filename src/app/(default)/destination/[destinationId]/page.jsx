'use client';
import Image from 'next/image';
import PageHeader from '../../../ui/PageHeader/PageHeader';
import Section from '../../../ui/Section/Section';
import CommentsWidget from '../../../ui/Widget/CommentsWidget';
import InformationWidget from '../../../ui/Widget/InformationWidget';
import PostWidget2 from '../../../ui/Widget/PostWidget2';
import SocialWidget from '../../../ui/Widget/SocialWidget';
import imgUrl1 from '../../../../../public/images/destination_details_1.jpeg';
import imgUrl2 from '../../../../../public/images/destination_details_2.jpeg';
import imgUrl3 from '../../../../../public/images/destination_details_3.jpeg';
import imgUrl4 from '../../../../../public/images/destination_details_4.jpeg';

const postWidgetData = [
  {
    imgUrl: '/images/latest_post_5.jpeg',
    title: 'Eiffel Tower',
    location: 'Paris, 24 Trips',
    distinationUrl: '/blogs/blog-details',
  },
  {
    imgUrl: '/images/latest_post_6.jpeg',
    title: 'Pryde Mountains',
    location: 'Prydelands, 100 Trips',
    distinationUrl: '/blogs/blog-details',
  },
  {
    imgUrl: '/images/latest_post_7.jpeg',
    title: 'Lao Lading Island',
    location: 'Krabal, 12 Trips',
    distinationUrl: '/blogs/blog-details',
  },
];

export default function DestinationDetails() {
  return (
    <>
      <PageHeader
        title="Single Destination"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/destination_single_bg.jpeg"
      />
      <Section
        spacingTopLg={140}
        spacingBottomLg={140}
        spacingTopMd={80}
        spacingBottomMd={80}
      >
        <div className="container">
          <div className="row cs_gap_y_50">
            <div className="col-lg-8">
              <div className="cs_post_details">
                <div className="row">
                  <div className="col-lg-6">
                    <Image
                      src={imgUrl1}
                      alt="Destination Image"
                      placeholder="blur"
                    />
                  </div>
                  <div className="col-lg-6">
                    <Image
                      src={imgUrl2}
                      alt="Destination Image"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <h2>The Complete Guide for Travelers in London</h2>
                <p>
                  The foreign and commonwealth office draws up an extensive list
                  of countries that should not be travelled to quite regularly
                  and it is from that our, and other global travel insurance
                  providers, underwriters decide which countries travel
                  insurance should be provided for. We look at the government
                  travel advice and not we can provide insurance to travellers.
                </p>
                <div className="cs_list_wrapper cs_gray_bg">
                  <h3 className="cs_fs_20 cs_medium">Good to Know:</h3>
                  <ul className="cs_list cs_style_2 cs_fs_18 cs_primary_color">
                    <li>
                      <i>
                        <img src="/images/icons/location.svg" alt="Icon" />
                      </i>
                      <span>Country: United Kingdom</span>
                    </li>
                    <li>
                      <i>
                        <img src="/images/icons/visa.svg" alt="Icon" />
                      </i>
                      <span>Visa Requirements: No</span>
                    </li>
                    <li>
                      <i>
                        <img src="/images/icons/language.svg" alt="Icon" />
                      </i>
                      <span>Languages spoken: English</span>
                    </li>
                    <li>
                      <i>
                        <img src="/images/icons/rate.svg" alt="Icon" />
                      </i>
                      <span>Per Person: $2707</span>
                    </li>
                    <li>
                      <i>
                        <img src="/images/icons/area.svg" alt="Icon" />
                      </i>
                      <span>Area (km2): 750.63 km</span>
                    </li>
                    <li>
                      <i>
                        <img src="/images/icons/location.svg" alt="Icon" />
                      </i>
                      <span>City: London</span>
                    </li>
                  </ul>
                </div>
                <p>
                  The foreign office travel advice is not to travel to the
                  following countries, even if it means losing business the risk
                  from the warzones listed below is just too great to make the
                  reward worth the danger:
                </p>
                <blockquote>
                  “Ei elit omnes impedit ius, vel et hinc agam fabulas. Ut
                  audiamre iracundia vim. An sumo diam ea. Cu omnis. An sumo
                  diam ea.”
                </blockquote>
                <p>
                  eres our top 10 countries to avoid travelling to, and the
                  reasons for the high risk factor! The risk is far from
                  conclusive (the foreign office travel advice lists many more
                  countries), but to me, these are the ones that all travellers
                  should avoid like the plague:
                </p>
                <div className="row">
                  <div className="col-lg-5">
                    <Image
                      src={imgUrl3}
                      alt="Destination Image"
                      placeholder="blur"
                    />
                  </div>
                  <div className="col-lg-7">
                    <Image
                      src={imgUrl4}
                      alt="Destination Image"
                      placeholder="blur"
                    />
                  </div>
                </div>
                <p>
                  Ai elit omnes lmpedit ius, tel et hinc agam fabulas. Ut audiam
                  invenire iracundia vim. An eam dico similique ut sint posse
                  sit, eum sumo diam ea. Liber consectetuer in mei, sea in
                  imperdiet assueverit contentions cibo blandit tacimates. Iusto
                  iudicabit similique idefinitionem eos an.Sit delicata
                  persequeris ex, in sea rebum deseruisse appella ntur. Lorem
                  ipsum dolor si vix aperiri consequat an.
                </p>
              </div>
              <SocialWidget />
              <hr />
              <CommentsWidget />
            </div>
            <aside className="col-lg-4">
              <div className="cs_sidebar cs_style_1 cs_white_bg cs_right_sidebar">
                <InformationWidget />
                <PostWidget2
                  data={postWidgetData}
                  title="Popular Destination"
                />
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
