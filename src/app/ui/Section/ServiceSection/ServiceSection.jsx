import Button from '../../Button/Button';
import IconboxStyle2 from '../../Iconbox/IconboxStyle2';
import SectionHeadingStyle2 from '../../SectionHeading/SectionHeadingStyle2';

export default function ServiceSection({ data, title, subTitle, btnUrl }) {
  return (
    <div className="container">
      <div className="row cs_gap_y_24">
        <div className="col-lg-6">
          <SectionHeadingStyle2 title={title} subTitle={subTitle} />
          <div className="cs_height_20 cs_height_lg_20" />
          <Button btnTxt="Schedule a Visit" btnUrl={btnUrl} />
        </div>
        {data?.map((elements, index) => (
          <div className="col-lg-3 col-sm-6" key={index}>
            <IconboxStyle2 data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
