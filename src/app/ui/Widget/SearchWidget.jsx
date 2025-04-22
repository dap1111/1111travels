import { Icon } from "@iconify/react";

export default function SearchWidget() {
  return (
    <div className="cs_sidebar_item cs_gray_bg widget_search">
      <form className="cs_sidebar_search cs_white_bg" action="#">
        <input type="text" placeholder="Search..." />
        <button className="cs_sidebar_search_btn cs_accent_bg cs_white_color">
          <Icon icon="fa6-solid:magnifying-glass" />
        </button>
      </form>
    </div>
  )
}
