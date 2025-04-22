import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import PackageSectionStyle2 from './PackageSectionStyle2';

export default function PackageSectionStyle4({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <PackageSectionStyle2 data={data} />
    </>
  );
}
