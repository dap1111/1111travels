'use client';
import PageHeader from '../../ui/PageHeader/PageHeader';
import PackageSectionStyle2 from '../../ui/Section/PackageSection/PackageSectionStyle2';
import Section from '../../ui/Section/Section';

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
  {
    imgUrl: '/images/package_img_8.jpeg',
    packageText: '3 Day 2 Night',
    title: 'Famous for its skyscrapers',
    location: 'New York City, USA',
    price: '4500',
    cardUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/package_img_9.jpeg',
    packageText: '3 Day 2 Night',
    title: 'An ancient Incan city',
    location: 'Machu Picchu, Peru',
    price: '5500',
    cardUrl: '/tours/tour-details',
  },
  {
    imgUrl: '/images/package_img_4.jpeg',
    packageText: '3 Day 2 Night',
    title: 'Famous for its whitewashed',
    location: 'Santorini, Greece',
    price: '4500',
    cardUrl: '/tours/tour-details',
  },
];

export default function Tour() {
  return (
    <>
      <PageHeader
        title="Popular Tours Packagess"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/tour_header_bg.jpeg"
      />
      <Section
        spacingTopLg={140}
        spacingTopMd={80}
        spacingBottomLg={140}
        spacingBottomMd={80}
      >
        <PackageSectionStyle2 data={packgeData} />
      </Section>
    </>
  );
}
