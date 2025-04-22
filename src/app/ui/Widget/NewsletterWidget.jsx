

export default function NewsletterWidget() {
  return (
    <div className="cs_sidebar_item cs_gray_bg">
      <h3 className="cs_sidebar_widget_title cs_fs_24 cs_semibold">
        Newsletter
      </h3>
      <hr />
      <form className="cs_subscribe_form">
        <div className="cs_input_field">
          <input type="text" placeholder="Enter E-Mail" />
          <span>
            <i className="fa-regular fa-envelope" />
          </span>
        </div>
        <button
          type="submit"
          className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_radius_4"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  )
}
