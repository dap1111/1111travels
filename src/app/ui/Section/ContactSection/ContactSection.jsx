import IconboxStyle5 from '../../Iconbox/IconboxStyle5';

export default function ContactSection({ data }) {
  return (
    <div className="container">
      <div className="row cs_gap_y_40">
        {data?.map((elements, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <IconboxStyle5 data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
