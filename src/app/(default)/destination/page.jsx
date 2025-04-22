import PageHeader from '@/app/ui/PageHeader/PageHeader';
import DestinationSection from '@/app/ui/Section/DestinationSection/DestinationSection';
import Section from '@/app/ui/Section/Section';

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
  {
    imgUrl: '/images/popular_destination_9.jpeg',
    title: 'Pryde mountains',
    placeAndTrip: 'Prydelands, 120 Trips',
    cardUrl: '/destination/destination-details',
  },
  {
    imgUrl: '/images/popular_destination_1.jpeg',
    title: 'Eiffel Tower',
    placeAndTrip: 'Paris, 24 Trips',
    cardUrl: '/destination/destination-details',
  },
];

export default function Destination() {
  return (
    <>
      <PageHeader
        title="Popular Destination"
        subTitle="Modern & Beautiful Travel Theme"
        bgImgUrl="/images/destination_header_bg.jpeg"
      />
      <Section
        spacingTopLg={140}
        spacingBottomLg={140}
        spacingTopMd={80}
        spacingBottomMd={80}
      >
        <DestinationSection data={destinationData} />
      </Section>
    </>
  );
}
