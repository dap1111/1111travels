import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import DestinationSection from './DestinationSection';

export default function DestinationSectionStyle4({ data, title, subTitle }) {
  return (
    <div>
      <SectionHeading
        title={title}
        subTitle={subTitle}
        variant={'text-center'}
      />
      <Spacing spacingLg={55} spacingMd={40} />
      <DestinationSection data={data} />
    </div>
  );
}
