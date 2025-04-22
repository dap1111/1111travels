import Post from '../../Post/Post';
import SectionHeading from '../../SectionHeading/SectionHeading';
import Spacing from '../../Spacing/Spacing';

export default function BlogSection({ data, title, subTitle }) {
  return (
    <div className="container-fluid">
      <SectionHeading title={title} subTitle={subTitle} variant="text-center" />
      <Spacing spacingLg={55} spacingMd={40} />
      <div className="row cs_gap_y_24">
        {data?.map((elements, index) => (
          <div className="col-lg-6" key={index}>
            <Post data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
