'use client';
import Head from 'next/head';
import PageHeader from '../../../app/ui/PageHeader/PageHeader';
import AboutSectionStyle2 from '../../../app/ui/Section/AboutSection/AboutSectionStyle2';
import BannerSectionStyle2 from '../../../app/ui/Section/BannerSection/BannerSectionStyle2';
import BrandSection from '../../ui/Section/BrandSecton/BrandSection';
import Section from '../../ui/Section/Section';
import TeamSection from '../../ui/Section/TeamSection/TeamSection';
import VideoSection from '../../ui/Section/VideoSection/VideoSection';
import WhyChooseUsSection from '../../ui/Section/WhyChooseUs/WhyChooseUsSection';
import aboutImg from '../../../../public/images/about_img.png';
import WhyChooseUsImg from '../../../../public/images/about_4.png';

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

const bannerData = {
  imgUrl: '/images/offer_text.png',
  title: 'Last TravelPro Offer',
  subTitle: 'Aerial view of Cape Town with Cape Town Stadium',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit felis sit amet turpis vehicula convallis. Ut ac tellus velit. Nulla mollis sollicitudin lacus id ornare. Phasellus laoreet nulla et nulla sagittis, sit amet cursus urna mollis.',
  btnUrl: '',
};

const teamData = [
  {
    imgUrl: '/images/team_1.jpeg',
    title: 'David Cooper',
    subTitle: 'CO FOUNDER',
  },
  {
    imgUrl: '/images/team_2.jpeg',
    title: 'David Cooper',
    subTitle: 'CO FOUNDER',
  },
  {
    imgUrl: '/images/team_3.jpeg',
    title: 'David Cooper',
    subTitle: 'CO FOUNDER',
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

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/about_header_bg.jpeg"
      />

      <Section
        spacingTopLg={140}
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopMd={80}
        className="cs_about cs_style_1"
      >
        <AboutSectionStyle2
          data={aboutData}
          subTitle="ABOUT US"
          title="We are Professional Planners For your"
          imgUrl={aboutImg}
        />
      </Section>

      <Section
        spacingBottomLg={120}
        spacingBottomMd={80}
        spacingTopLg={115}
        spacingTopMd={80}
        bgImgUrl="/images/banner_bg_3.jpeg"
      >
        <BannerSectionStyle2 data={bannerData} />
      </Section>

      <Section
        spacingBottomLg={135}
        spacingBottomMd={75}
        spacingTopLg={135}
        spacingTopMd={75}
      >
        <WhyChooseUsSection
          imgUrl={WhyChooseUsImg}
          title="Get The Best Travel Experience"
          subTitle="WHY CHOOSE US"
        />
      </Section>

      <Section
        className="cs_accent_bg_1"
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={135}
        spacingTopMd={75}
      >
        <TeamSection
          data={teamData}
          title="Our Experts Team Member"
          subTitle="TRAVEL AGENTS"
        />
      </Section>

      <Section spacingTopLg={140} spacingTopMd={80}>
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
    </>
  );
}
