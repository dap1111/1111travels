import Brand from '../../Brand/Brand';

export default function BrandSection({ data }) {
  return (
    <div className="container">
      <div className="cs_brand_list cs_style_1">
        {data?.map((elements, index) => (
          <Brand imgUrl={elements} key={index} />
        ))}
      </div>
    </div>
  );
}
