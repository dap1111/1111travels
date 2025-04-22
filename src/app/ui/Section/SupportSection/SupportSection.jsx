import IconboxStyle3 from '../../Iconbox/IconboxStyle3';

export default function SupportSection({ data }) {
  return (
    <div className="container">
      <div className="row cs_gap_y_24">
        {data?.map((elements, index) => (
          <div className="col-lg-4" key={index}>
            <IconboxStyle3 data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
