import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import Step from '../../Step/Step';

export default function StepSection({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="cs_steps cs_style_1">
          {data?.map((elements, index) => (
            <Step data={elements} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
