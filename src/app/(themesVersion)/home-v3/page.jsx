'use client';
import HeroStyle3 from '../../ui/Hero/HeroStyle3';
import AboutSectionStyle3 from '../../ui/Section/AboutSection/AboutSectionStyle3';
import BlogSectionStyle3 from '../../ui/Section/BlogSection/BlogSectionStyle3';
import DestinationSectionStyle3 from '../../ui/Section/DestinationSection/DestinationSectionStyle3';
import PackageSectionStyle3 from '../../ui/Section/PackageSection/PackageSectionStyle3';
import PortfolioSection from '../../ui/Section/PortfolioSection/PortfolioSection';
import Section from '../../ui/Section/Section';
import ServiceSection from '../../ui/Section/ServiceSection/ServiceSection';
import SupportSection from '../../ui/Section/SupportSection/SupportSection';
import TestimonialSection2 from '../../ui/Section/TestimonialSection/TestimonialSection2';
import VideoSectionStyle2 from '../../ui/Section/VideoSection/VideoSectionStyle2';
import heroImg from '../../../../public/images/hero_3.png';
import aboutImg from '../../../../public/images/about_left_1.png';

const heroData = {
  subTitle: 'Tour And Travels',
  title: 'Lets Travel The World With Us',
  desc: 'Denouncing pleasure and praising pain was born and will give you complete great explorer of the truth the master-builder.',
  bgImgUrl: '/images/hero_bg_3.jpeg',
};

const aboutData = {
  desc: 'Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis lectus, id volutpat magna. Morbi consequat porttitor fermentum. Nulla vestibulum tincidunt viverra. Vestibulum accumsan molestie lorem, non laoreet massa. Duis at dui sem. Vivamus ut gravida libero Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis Quisdignissim enim diam, eget pulvinar ex viverra id. Nulla a lobortis lectus, id volutpat magna. Morbti consequat porttitor fermentum. Nulla vestibulum tincidunt',
  btnUrl: '/about',
  circleImgUrl: '/images/about_shape.png',
};

const packageData = [
  {
    imgUrl: `/images/package_img_1.jpeg`,
    location: `Indonesia`,
    duration: `15 Days`,
    rating: `3k`,
    title: `Aegean Adventure`,
    price: `370`,
    cardUrl: `/tours/tour-details`,
  },
  {
    imgUrl: `/images/package_img_2.jpeg`,
    location: `Paris`,
    duration: `07 Days`,
    rating: `2k`,
    title: `Aegean Adventure`,
    price: `380`,
    cardUrl: `/tours/tour-details`,
  },
  {
    imgUrl: `/images/package_img_3.jpeg`,
    location: `Indonesia`,
    duration: `03 Days`,
    rating: `5k`,
    title: `Aegean Adventure`,
    price: `390`,
    cardUrl: `/tours/tour-details`,
  },
  {
    imgUrl: `/images/package_img_7.jpeg`,
    location: `Paris`,
    duration: `05 Days`,
    rating: `4k`,
    title: `Aegean Adventure`,
    price: `400`,
    cardUrl: `/tours/tour-details`,
  },
];

const serviceData = [
  {
    imgUrl: '/images/icons/home_icon.svg',
    title: 'Smart Homes',
    desc: 'Immigration advisory visa a foundation was establishe with a  ideaImmigration advisory visa a foundation',
  },
  {
    imgUrl: '/images/icons/location_icon.svg',
    title: 'Atractive Location',
    desc: 'Immigration advisory visa a foundation was establishe with a  ideaImmigration advisory visa a foundation',
  },
  {
    imgUrl: '/images/icons/pool_icon.svg',
    title: 'Swimming Pool',
    desc: 'Immigration advisory visa a foundation was establishe with a  ideaImmigration advisory visa a foundation',
  },
  {
    imgUrl: '/images/icons/wifi_icon.svg',
    title: 'Fast Speed WI-FI',
    desc: 'Immigration advisory visa a foundation was establishe with a  ideaImmigration advisory visa a foundation',
  },
  {
    imgUrl: '/images/icons/car_icon.svg',
    title: 'Parking Space',
    desc: 'Immigration advisory visa a foundation was establishe with a  ideaImmigration advisory visa a foundation',
  },
  {
    imgUrl: '/images/icons/fitness_icon.svg',
    title: 'Fitness Center',
    desc: 'Immigration advisory visa a foundation was establishe with a  ideaImmigration advisory visa a foundation',
  },
];

const portfolioData = [
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
];

const supportData = [
  {
    imgUrl: '/images/icons/support_icon.svg',
    title: 'Support',
    desc: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
  },
  {
    imgUrl: '/images/icons/security_icon.svg',
    title: 'Security',
    desc: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
  },
  {
    imgUrl: '/images/icons/quality_icon.svg',
    title: 'Quality',
    desc: 'Condimentum lobortis donec nibh molestie massa dictumst cursus.',
  },
];

const destinationData = [
  {
    imgUrl: '/images/popular_destination_6.jpeg',
    title: 'Eiffel Tower',
    placeAndTrip: 'Paris, 24 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_7.jpeg',
    title: ' Pryde Mountains',
    placeAndTrip: 'Prydelands, 100 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_8.jpeg',
    title: 'Lao Lading Island',
    placeAndTrip: 'Krabal, 12 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_9.jpeg',
    title: 'Ton Kwen Temple',
    placeAndTrip: 'Thailand, 20 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_10.jpeg',
    title: 'Taj Mahal',
    placeAndTrip: 'Indonesia, 50 Trips',
    cardUrl: '/destination/destination-details',
  },
];

const testimonialData = [
  {
    imgUrl: 'images/testimonial_avatar_1.jpeg',
    name: 'Cameron',
    designation: 'Ceo',
    desc: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.',
  },
  {
    imgUrl: 'images/testimonial_avatar_2.jpeg',
    name: 'Williamson',
    designation: 'Founder',
    desc: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.',
  },
  {
    imgUrl: 'images/testimonial_avatar_3.jpeg',
    name: 'Cameron Williamson',
    designation: 'Ceo & Founder',
    desc: 'The most advanced revenue than this. Iwill refer everyone I like Level more and more each day because it makes my easier. It really saves me time and effort. Level is exactly business has been lacking.',
  },
];

const blogData = [
  {
    imgUrl: '/images/post_6.jpeg',
    date: 'September 26, 2024',
    title: 'Things to see and do when visiting Japan',
    comments: '3',
    postUrl: '/blogs/blog-details',
    desc: 'Completely reinvent worldwide testing new with cooperative leverage multimedia',
  },
  {
    imgUrl: '/images/post_7.jpeg',
    date: 'September 25, 2024',
    title: 'A place where start new life with adventure travel',
    comments: '8',
    postUrl: '/blogs/blog-details',
    desc: 'Completely reinvent worldwide testing new with cooperative leverage multimedia',
  },
  {
    imgUrl: '/images/post_8.jpeg',
    date: 'September 23, 2024',
    title: 'Travel the most beautiful places in the world',
    comments: '5',
    postUrl: '/blogs/blog-details',
    desc: 'Completely reinvent worldwide testing new with cooperative leverage multimedia',
  },
];

export default function HomeStyle3() {
  return (
    <>
      <HeroStyle3 data={heroData} imgUrl={heroImg} />

      <Section
        className="cs_about cs_style_2"
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
      >
        <AboutSectionStyle3
          title="We are Most Funning Company About Travel And adventure"
          subTitle="ADVENTURE & TRAVELS"
          data={aboutData}
          imgUrl={aboutImg}
        />
      </Section>

      <Section
        spacingBottomLg={170}
        spacingBottomMd={80}
        spacingTopLg={170}
        spacingTopMd={80}
        className="cs_video_block cs_style_1 cs_bg_filed cs_type_1 cs_primary_bg cs_bg_fixed"
        bgImgUrl="/images/video_block_2.jpeg"
      >
        <VideoSectionStyle2
          videoUrl="https://www.youtube.com/embed/eSUmkFPln_U"
          title="Ready to Travel With <br /> Real Adventure And <br /> Enjoy Natural"
        />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={135}
        spacingTopMd={75}
      >
        <PackageSectionStyle3
          data={packageData}
          title="Popular Tours Packages"
          subTitle="CHOOSE YOUR PACKAGE"
        />
      </Section>

      <Section
        className="cs_services_1 cs_accent_bg_1"
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={75}
      >
        <ServiceSection
          data={serviceData}
          title="What We Offer For Our Great Packages"
          subTitle="OUR SERVICES asdfasdf"
          btnUrl="/contact"
        />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
      >
        <PortfolioSection
          data={portfolioData}
          title="Explore our photos"
          subTitle="OUR PORTFOLIO"
        />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
        className="cs_accent_bg_1"
      >
        <SupportSection data={supportData} />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
      >
        <DestinationSectionStyle3
          data={destinationData}
          title="Popular Destinations"
          subTitle="POPULAR DESTINATION"
        />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
        className="cs_slider cs_style_2 cs_accent_bg_1 position-relative"
      >
        <TestimonialSection2 data={testimonialData} />
      </Section>

      <Section
        spacingTopLg={135}
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopMd={75}
      >
        <BlogSectionStyle3
          data={blogData}
          title="Last Minute Amazing Deals"
          subTitle="NEWS & BLOGS"
        />
      </Section>
    </>
  );
}
