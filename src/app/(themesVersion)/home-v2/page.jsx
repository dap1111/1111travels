'use client';
import HeroStyle2 from '@/app/ui/Hero/HeroStyle2';
import AccordionSection from '@/app/ui/Section/AccordionSection/AccordionSection';
import BlogSectionStyle2 from '@/app/ui/Section/BlogSection/BlogSectionStyle2';
import CtaSection from '@/app/ui/Section/CtaSection/CtaSection';
import DestinationSectionStyle2 from '@/app/ui/Section/DestinationSection/DestinationSectionStyle2';
import PackageSectionStyle4 from '@/app/ui/Section/PackageSection/PackageSectionStyle4';
import Section from '@/app/ui/Section/Section';
import TeamSection from '@/app/ui/Section/TeamSection/TeamSection';
import TestimonialSection from '@/app/ui/Section/TestimonialSection/TestimonialSection';
import WhyChooseUsSection from '@/app/ui/Section/WhyChooseUs/WhyChooseUsSection';
import Spacing from '@/app/ui/Spacing/Spacing';
import heroImg from '../../../../public/images/hero_2.png';
import WhyChooseUsImg from '../../../../public/images/about_4.png';
import testimonialImg from '../../../../public/images/testimonial_right.jpeg';

const heroData = {
  subTitle: 'Find Next PlaceTo Visit',
  title: 'Tour Travel & Adventure Camping',
  desc: 'Denouncing pleasure and praising pain was born and will give you complete great explorer of the truth the master-builder.',
};

const packgeData = [
  {
    imgUrl: '/images/package_img_5.jpeg',
    packageText: '3 Day 2 Night',
    title: 'Beauty of Solomon Island',
    location: 'Africa Portugal Mexico',
    price: '4000',
    cardUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/package_img_6.jpeg',
    packageText: '3 Day 2 Night',
    title: 'Believe In Your Mexico',
    location: 'Paris, France',
    price: '5000',
    cardUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/package_img_7.jpeg',
    packageText: '3 Day 2 Night',
    title: 'Proof That Bahamas Beauty',
    location: 'Rome, Italy',
    price: '3500',
    cardUrl: '/tours/tour-details',
  },
];

const ctaData = {
  title: 'Discount Popup Examples to Elevate',
  subTitle: '27% DISCOUNT OFFER',
  desc: 'Denouncing pleasure and praising pain was born and will give you complete great explorer of the truth the master-builder.',
  brand: [
    '/images/brand_6.png',
    '/images/brand_7.png',
    '/images/brand_8.png',
    '/images/brand_9.png',
    '/images/brand_10.png',
    '/images/brand_11.png',
  ],
  btnUrl: '',
};

const destinationData = [
  {
    imgUrl: '/images/casestudy_1.jpeg',
    title: 'Copenhagen ,<br/> Denmark',
    destinationUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/casestudy_2.jpeg',
    title: 'California, <br/> USA',
    destinationUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/casestudy_3.jpeg',
    title: 'Rome ,<br/> Italy',
    destinationUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/casestudy_4.jpeg',
    title: 'London, <br/> United Kingdom',
    destinationUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/casestudy_5.jpeg',
    title: 'Paris, <br/> Franch',
    destinationUrl: '/tours/tour-details',
  },
];

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

const accordionData = [
  {
    title: 'What type of travel packages does Vacasky offer?',
    content:
      'There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis variations of passages of available.',
  },
  {
    title: 'How do I book a trip with Vacasky?',
    content:
      'There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis variations of passages of available.',
  },
  {
    title: 'What is the payment process for Vacasky?',
    content:
      'There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis variations of passages of available.',
  },
  {
    title: 'What Payment Methods are Supported?',
    content:
      'There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis variations of passages of available.',
  },
  {
    title: 'How to cancel my booking in Vacasky?',
    content:
      'There are many variations of passages of available but the Ut elit tellus luctus nec ullamcorper at mattis variations of passages of available.',
  },
];

const testimonialData = [
  {
    imgUrl: '/images/testimonial_avatar_1.jpeg',
    authName: 'Alexon',
    authDesignation: 'Founder & CEO',
    title: 'Best practices chains',
    desc: 'Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains',
  },
  {
    imgUrl: '/images/testimonial_avatar_2.jpeg',
    authName: 'Shen',
    authDesignation: 'CEO',
    title: 'Cooperative initiatives',
    desc: 'Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains',
  },
  {
    imgUrl: '/images/testimonial_avatar_2_1.jpeg',
    authName: 'Jack',
    authDesignation: 'Founder',
    title: 'Seemly leverage market excellent',
    desc: 'Completely reinvent worldwide testing new proceds with cooperative initiatives. Seemly leverage market excellent best practices chains',
  },
];

const blogData = [
  {
    imgUrl: '/images/post_3.jpeg',
    date: '31 May',
    title: 'Things to see and do when visiting Japan',
    comments: '3',
    postUrl: '/blogs/blog-details',
  },
  {
    imgUrl: '/images/post_4.jpeg',
    date: '30 May',
    title: 'A place where start new life with adventure travel',
    comments: '8',
    postUrl: '/blogs/blog-details',
  },
  {
    imgUrl: '/images/post_5.jpeg',
    date: '28 May',
    title: 'Travel the most beautiful places in the world',
    comments: '5',
    postUrl: '/blogs/blog-details',
  },
];

export default function HomeStyle2() {
  return (
    <>
      <HeroStyle2 data={heroData} imgUrl={heroImg} />
      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={135}
        spacingTopMd={75}
      >
        <PackageSectionStyle4
          data={packgeData}
          title="Popular Tours Packages"
          subTitle="CHOOSE YOUR PACKAGE"
        />
      </Section>

      <Section
        spacingBottomLg={150}
        spacingBottomMd={80}
        spacingTopLg={150}
        spacingTopMd={80}
        className="cs_cta cs_style_1 cs_bg_filed cs_primary_bg cs_bg_fixed"
        bgImgUrl="/images/banner_bg_2.jpeg"
      >
        <CtaSection data={ctaData} />
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
        <DestinationSectionStyle2
          data={destinationData}
          title="Most Popular Destination"
          subTitle="POPULAR DESTINATION"
        />
      </Section>

      <Section
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

      <Section
        spacingBottomLg={150}
        spacingBottomMd={80}
        spacingTopLg={150}
        spacingTopMd={80}
        className="cs_primary_bg cs_bg_filed cs_bg_fixed cs_parallax"
        bgImgUrl="/images/accordian_bg.jpeg"
      >
        <AccordionSection data={accordionData} />
      </Section>

      <Section
        className="cs_testimonial cs_style_1"
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
      >
        <TestimonialSection
          title="Our Valuable Customers Awesome Feedback"
          subTitle="TESTIMONIALS"
          desc="Completely reinvent worldwide testing procedures with cooperative initiatives to leverage existing excellent best practices with functional"
          imgUrl={testimonialImg}
          data={testimonialData}
        />
      </Section>

      <Section
        className="cs_accent_bg_1"
        spacingTopLg={135}
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopMd={75}
      >
        <BlogSectionStyle2
          data={blogData}
          title="Last Minute Amazing Deals"
          subTitle="NEWS & BLOGS"
        />
      </Section>
      <Spacing spacingLg={140} spacingMd={80} />
    </>
  );
}
