import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import Card from '../../Card/Card';

export default function PackageSectionStyle3({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container-fluid">
        <div className="row cs_gap_y_24">
          {data?.map((elements, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <Card data={elements} variant="cs_accent_bg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
