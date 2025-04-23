'use client';
import PageHeader from '../../../ui/PageHeader/PageHeader';
import Section from '../../../ui/Section/Section';
import Tabs from '../../../ui/Tabs/Tabs';
import InformationWidget from '../../../ui/Widget/InformationWidget';
import PostWidget2 from '../../../ui/Widget/PostWidget2';
import Image from 'next/image';
import tourImgUrl from '../../../../../public/images/tour_details.jpeg';

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

const tabData = {
  tourPlan: [
    {
      schedule: '1',
      title: 'Departure',
      desc: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut, venenatis vitae justo. Nullam dictum felis eu pede mollis pretium.',
    },
    {
      schedule: '2',
      title: 'Visiting Amsterdam, Prague and Vienna',
      desc: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut, venenatis vitae justo. Nullam dictum felis eu pede mollis pretium.',
    },
    {
      schedule: '3',
      title: 'Rest',
      desc: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut, venenatis vitae justo. Nullam dictum felis eu pede mollis pretium.',
    },
    {
      schedule: '4',
      title: 'Historical Tour',
      desc: 'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim Donec pede justo, fringilla vel, aliquet nec vulputate eget, arcu. In enim justo, rhoncus ut, venenatis vitae justo. Nullam dictum felis eu pede mollis pretium.',
    },
  ],
  location:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd',
  gallary: [
    {
      imgUrl: '/images/gallery_1.jpeg',
    },
    {
      imgUrl: '/images/gallery_2.jpeg',
    },
    {
      imgUrl: '/images/gallery_3.jpeg',
    },
    {
      imgUrl: '/images/gallery_4.jpeg',
    },
    {
      imgUrl: '/images/gallery_5.jpeg',
    },
    {
      imgUrl: '/images/gallery_6.jpeg',
    },
  ],
};

const gallaryData = [
  '/images/gallery_7.jpeg',
  '/images/gallery_8.jpeg',
  '/images/gallery_9.jpeg',
];

export default function TourDetails() {
  return (
    <>
      <PageHeader
        title="Tour Details"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/destination_header_bg.jpeg"
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
                <h2 className="cs_tour_details_title">
                  Iceberg, Greenland{' '}
                  <small>
                    $1200/<span>Day Night tour</span>
                  </small>
                </h2>
                <Image src={tourImgUrl} alt="Tour Thumb" placeholder="blur" />
                <h3>
                  Marriage And Greenland Have More In Common Than You Think
                  Greenland Have More
                </h3>
                <p>
                  Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet.
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                  Etiam rhoncus. Maecenas tempus condimentum rhon sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blanditvel, luctus pulvinar, hendrerit id,lorem.
                  Maecenas nec odio ante tincidunt tempus. Donec vitae sapien ut
                  libero venenatis faucibus. Nullam quis ante. Etiam sit
                </p>
                <hr />
              </div>
              <Tabs data={tabData} />
              <div className="cs_tour_gallery">
                <h3 className="cs_gallery_title cs_fs_30 cs_semibold">
                  From Our Gallery
                </h3>
                <div className="cs_grid_4">
                  {gallaryData?.map((elements, index) => (
                    <div className="cs_gallery_img cs_radius_5" key={index}>
                      <img src={elements} alt="Gallery Image" />
                    </div>
                  ))}
                </div>
              </div>
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
