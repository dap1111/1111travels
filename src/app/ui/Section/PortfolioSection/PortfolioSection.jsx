import Gallery from '../../Gallery/Gallery';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';

export default function PortfolioSection({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <Gallery data={data} />
      </div>
    </>
  );
}
