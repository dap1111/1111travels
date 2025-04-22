import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const GalleryItem = ({ imgUrl }) => {
  return (
    <a href={imgUrl} className="cs_gallery_item cs_zoom">
      <img src={imgUrl} alt="Gallery Image" className="cs_zoom_in" />
      <div className="cs_gallery_overlay" />
      <div className="cs_gallery_icon position-absolute">
        <img src="/images/icons/plus_icon.svg" alt="Icon" />
      </div>
    </a>
  );
};

export default function Gallery({ data }) {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="cs_grid_3 cs_gallery_list cs_style_1"
    >
      {data?.map((elements, index) => (
        <GalleryItem imgUrl={elements.imgUrl} key={index} />
      ))}
    </LightGallery>
  );
}
