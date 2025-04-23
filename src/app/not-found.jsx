import Button from '../app/ui/Button/Button';
import Spacing from '../app/ui/Spacing/Spacing';

export default function ErrorPage() {
  return (
    <div className="cs_error cs_center text-center cs_gray_bg_1">
      <div className="container">
        <h3 className="cs_section_title_up cs_ternary_font cs_accent_color cs_normal cs_fs_30">
          404 ERRRO
        </h3>
        <h2 className={`cs_section_title cs_semibold cs_fs_85 mb-0 aos`}>
          This page could
          <br />
          not be found.
        </h2>
        <Spacing spacingLg={50} spacingMd={30} />
        <Button btnTxt="Back To Home" btnUrl="/" />
      </div>
    </div>
  );
}
