import CardStyle2 from '../../Card/CardStyle2';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';

export default function DestinationSectionStyle3({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="cs_grid_2">
          {data?.map((elements, index) => (
            <div className="cs_grid_item" key={index}>
              <CardStyle2 data={elements} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
