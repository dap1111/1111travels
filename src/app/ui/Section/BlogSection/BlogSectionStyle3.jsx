import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';
import PostStyle3 from '../../Post/PostStyle3';

export default function BlogSectionStyle3({ data, title, subTitle }) {
  return (
    <>
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="container">
        <div className="cs_grid_4">
          {data?.map((elements, index) => (
            <div className="cs_grid_item" key={index}>
              <PostStyle3 data={elements} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
