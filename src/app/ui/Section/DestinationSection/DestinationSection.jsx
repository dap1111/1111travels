import CardStyle2 from '../../Card/CardStyle2';

export default function DestinationSection({ data }) {
  return (
    <div className="container">
      <div className="cs_grid_1">
        {data?.map((elements, index) => (
          <div className="cs_grid_item" key={index}>
            <CardStyle2 data={elements} />
          </div>
        ))}
      </div>
    </div>
  );
}
