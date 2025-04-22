
export default function CategoryWidget() {
  return (
    <div className="cs_sidebar_item cs_gray_bg widget_categories">
      <h3 className="cs_sidebar_widget_title cs_fs_24 cs_semibold">
        Category
      </h3>
      <hr />
      <ul className="cs_mp0">
        <li className="cs_cat_item cs_primary_color">
          <a href="#">Travels</a>
          <span>(20)</span>
        </li>
        <li className="cs_cat_item cs_primary_color">
          <a href="#">Camping</a>
          <div>(35)</div>
        </li>
        <li className="cs_cat_item cs_primary_color">
          <a href="#">Life Style</a>
          <div>(10)</div>
        </li>
        <li className="cs_cat_item cs_primary_color">
          <a href="#">Sight Seeing</a>
          <span>(25)</span>
        </li>
        <li className="cs_cat_item cs_primary_color">
          <a href="#">Trekking</a>
          <span>(40)</span>
        </li>
        <li className="cs_cat_item">
          <a href="#">Traveling</a>
          <span>(25)</span>
        </li>
      </ul>
    </div>
  )
}
