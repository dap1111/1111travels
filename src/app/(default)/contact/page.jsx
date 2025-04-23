'use client';
import LocationInMap from '../../ui/LocationInMap/LocationInMap';
import PageHeader from '../../ui/PageHeader/PageHeader';
import ContactFormSection from '../../ui/Section/ContactFormSection/ContactFormSection';
import ContactSection from '../../ui/Section/ContactSection/ContactSection';
import Section from '../../ui/Section/Section';

const contactData = [
  {
    icon: 'fa6-solid:location-dot',
    title: 'Office Address',
    text: '7 Green Lake Street <br /> Crawfordsville, IN 47933',
  },
  {
    icon: 'fa:phone',
    title: 'Phone Call',
    text: '+98 234 (4567) 890 <br /> +98 234 (4567) 890',
  },
  {
    icon: 'fa:envelope-o',
    title: 'E-Mail Us',
    text: 'example@gmail.com <br /> yourmail@gmail.com',
  },
  {
    icon: 'fa6-solid:headset',
    title: 'Supports',
    text: '24/7 any time support team <br /> ready for supports.',
  },
];

const locationUrlData =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd';

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/destination_header_bg.jpeg"
      />
      <Section
        spacingBottomLg={140}
        spacingBottomMd={80}
        spacingTopLg={140}
        spacingTopMd={80}
      >
        <ContactSection data={contactData} />
      </Section>
      <Section
        className="cs_gray_bg"
        spacingBottomLg={100}
        spacingBottomMd={60}
        spacingTopLg={135}
        spacingTopMd={75}
      >
        <ContactFormSection title="Contact Information" subTitle="CONTACT US" />
      </Section>
      <Section>
        <LocationInMap data={locationUrlData} />
      </Section>
    </>
  );
}
