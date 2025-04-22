import CardStyle3 from '../../Card/CardStyle3';

export default function PackageSectionStyle2({ data }) {
  return (
    <div className="container">
      <div className="row cs_gap_y_24">
        {data?.map((elements, index) => (
          <div className="col-lg-4" key={index}>
            <CardStyle3 data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
