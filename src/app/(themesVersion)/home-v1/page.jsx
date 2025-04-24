'use client';
import Hero from '../../ui/Hero/Hero';
import AboutSection from '../../ui/Section/AboutSection/AboutSection';
import BannerSection from '../../ui/Section/BannerSection/BannerSection';
import BlogSection from '../../ui/Section/BlogSection/BlogSection';
import BrandSection from '../../ui/Section/BrandSecton/BrandSection';
import DestinationSectionStyle4 from '../../ui/Section/DestinationSection/DestinationSectionStyle4';
import FunfactSection from '../../ui/Section/FunfactSection/FunfactSection';
import IconboxSection from '../../ui/Section/IconboxSection/IconboxSection';
import PackageSection from '../../ui/Section/PackageSection/PackageSection';
import Section from '../../ui/Section/Section';
import StepSection from '../../ui/Section/StepSection/StepSection';
import VideoSection from '../../ui/Section/VideoSection/VideoSection';
import aboutImg from '../../../../public/images/about_img.png';
import funfactImg from '../../../../public/images/funfact_img.png';

const heroData = {
  title: `Travel Top Destination <br /> of The World`,
  subTitle: `Let's Travel The World With Us`,
  bgImgUrl: `/images/hero_bg.jpeg`,
};

const aboutData = {
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tem por incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do',
  note: 'Speak to our Destination Experts at Direct Call +1 546 378 654',
  features: [
    'All placges and activiates are carefully picked by us.',
    ' 98% Course Completitation Rates',
    'We are an award winning agency',
    'Trusted by more than 80,000 customers',
  ],
};

const iconboxData = [
  {
    imgUrl: '/images/icons/feature_icon_1.svg',
    title: 'Customer Delight',
    desc: 'We deliver the best service and you to experience for our customer we est service and you to experie',
  },
  {
    imgUrl: '/images/icons/feature_icon_2.svg',
    title: 'Trusted Adventure',
    desc: 'We deliver the best service and you to experience for our customer we est service and you to experie',
  },
  {
    imgUrl: '/images/icons/feature_icon_3.svg',
    title: 'Expert Guides',
    desc: 'We deliver the best service and you to experience for our customer we est service and you to experie',
  },
  {
    imgUrl: '/images/icons/feature_icon_4.svg',
    title: 'Time Flexibility',
    desc: 'We deliver the best service and you to experience for our customer we est service and you to experie',
  },
];

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

const funfactData = [
  {
    number: 502,
    suffix: '+',
    title: 'Holiday Package',
  },
  {
    number: 100,
    suffix: '+',
    title: 'Luxury Hotel',
  },
  {
    number: 77,
    suffix: 'k',
    title: 'Premium Airlines',
  },
  {
    number: 2,
    suffix: 'k+',
    title: 'Happy Customer',
  },
];

const destinationData = [
  {
    imgUrl: '/images/popular_destination_1.jpeg',
    title: 'Eiffel Tower',
    placeAndTrip: 'Paris, 24 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_2.jpeg',
    title: ' Pryde Mountains',
    placeAndTrip: 'Prydelands, 100 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_3.jpeg',
    title: 'Lao Lading Island',
    placeAndTrip: 'Krabal, 12 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_4.jpeg',
    title: 'Ton Kwen Temple',
    placeAndTrip: 'Thailand, 20 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_5.jpeg',
    title: 'Taj Mahal',
    placeAndTrip: 'Indonesia, 50 Trips',
    cardUrl: '/destination/destination-details',
  },
];

const bannerData = {
  title: 'A Truly Wonderful Experience',
  subTitle:
    'Brilliant for anyone looking to get away from the hustle and bustle of city life or detox from their tech for a few days. I could have stayed another week! <br /> <br/> They really have thought about everything here down to the finest details.',
  date: '01 Jan 2025',
};

const stepData = [
  {
    step: '01',
    imgUrl: '/images/working_process_1.png',
    title: 'Get Travel Insurence',
    desc: 'We provide a range of digital marketing lutions including website design.',
  },
  {
    step: '02',
    imgUrl: '/images/working_process_2.png',
    title: 'Compare & Book',
    desc: 'We provide a range of digital marketing lutions including website design.',
  },
  {
    step: '03',
    imgUrl: '/images/working_process_3.png',
    title: 'Book a Room',
    desc: 'We provide a range of digital marketing lutions including website design.',
  },
];

const videoData = {
  bgImgUrl: '/images/video_block.jpeg',
  videoUrl: 'https://www.youtube.com/embed/eSUmkFPln_U',
  title: 'Our Journey <br/>in Videos',
  location: 'Location Mountain Strait, Any State',
};

const brandData = [
  '/images/brand_1.svg',
  '/images/brand_2.svg',
  '/images/brand_2.svg',
  '/images/brand_4.svg',
  '/images/brand_5.svg',
];

const blogData = [
  {
    imgUrl: '/images/post_1.jpeg',
    postAuthImg: '/images/avatar_1.png',
    title: 'Useful VS Code Esions Front- End Develop',
    desc: 'Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes suas molesti interpretaris',
    postUrl: 'blogs/blog-details',
  },
  {
    imgUrl: '/images/post_2.jpeg',
    postAuthImg: '/images/avatar_2.png',
    title: 'Designing Better Linke Website And Email',
    desc: 'Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes suas molesti interpretaris',
    postUrl: 'blogs/blog-details',
  },
];

export default function Home() {
  return (
    <>
      <Hero data={heroData} />

      <Section
        spacingTopLg={140}
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopMd={80}
        className="cs_about cs_style_1"
      >
        <AboutSection
          imgUrl={aboutImg}
          data={aboutData}
          subTitle="ABOUT US"
          title="We are Professional Planners For your"
        />
      </Section>

      <Section
        className="cs_featured cs_style_1 cs_bg_filed"
        spacingBottomLg={133}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
        bgImgUrl="/images/feature_bg.jpeg"
      >
        <IconboxSection data={iconboxData} />
      </Section>

      <Section spacingTopLg={135} spacingTopMd={75}>
        <PackageSection
          title="Popular Tours Packages"
          subTitle="CHOOSE YOUR PACKAGE"
          data={packageData}
        />
      </Section>

      <Section spacingTopLg={135} spacingTopMd={80}>
        <FunfactSection
          imgUrl={funfactImg}
          bgImgUrl="/images/funfact_shape.png"
          title="Discover The World With Our Guide"
          subTitle="TRAVEL POINT"
          desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
          data={funfactData}
        />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={135}
        spacingTopMd={80}
      >
        <DestinationSectionStyle4
          data={destinationData}
          title="Popular Destinations"
          subTitle="POPULAR DESTINATION"
        />
      </Section>

      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={125}
        spacingTopMd={70}
        className="cs_banner cs_style_1 cs_bg_filed cs_primary_bg"
        bgImgUrl="/images/banner_bg.jpeg"
      >
        <BannerSection data={bannerData} />
      </Section>

      <Section
        spacingBottomLg={133}
        spacingBottomMd={80}
        spacingTopLg={135}
        spacingTopMd={80}
      >
        <StepSection
          data={stepData}
          title="Getting Started? It’s Simple"
          subTitle="HOW IT WORKS"
        />
      </Section>

      <Section>
        <VideoSection data={videoData} />
      </Section>

      <Section
        spacingBottomLg={135}
        spacingBottomMd={80}
        spacingTopLg={76}
        spacingTopMd={40}
      >
        <BrandSection data={brandData} />
      </Section>

      <Section spacingBottomLg={140} spacingBottomMd={80}>
        <BlogSection
          data={blogData}
          subTitle="NEWS & BLOGS"
          title="Last Minute Amazing Deals"
        />
      </Section>
    </>
  );
}
