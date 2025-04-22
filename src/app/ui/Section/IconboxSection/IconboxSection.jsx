import Iconbox from '../../Iconbox/Iconbox';

export default function IconboxSection({ data }) {
  return (
    <div className="container">
      <div
        className="row cs_gap_y_40 aos fadeIn"
        data-aos-duration="800"
        data-aos-delay="400"
      >
        {data?.map((elements, index) => (
          <div className="col-lg-3 col-sm-6" key={index}>
            <Iconbox data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
