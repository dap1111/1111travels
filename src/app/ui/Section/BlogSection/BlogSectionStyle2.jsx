import PostStyle2 from '../../Post/PostStyle2';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';

export default function BlogSectionStyle2({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="row cs_gap_y_24">
          {data?.map((elements, index) => (
            <div className="col-lg-4" key={index}>
              <PostStyle2 data={elements} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
