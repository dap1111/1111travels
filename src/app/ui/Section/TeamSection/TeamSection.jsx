import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import Team from '../../Team/Team';

export default function TeamSection({ title, subTitle, data }) {
  return (
    <>
      <SectionHeading
        title={title}
        subTitle={subTitle}
        variant={'text-center'}
      />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="row cs_gap_y_30">
          {data?.map((elements, index) => (
            <div className="col-lg-4" key={index}>
              <Team data={elements} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
