export default function LocationInMap({ data }) {
  return (
    <div className="cs_google_map">
      <iframe src={data} allowFullScreen="" />
    </div>
  );
}
