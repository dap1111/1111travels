
export default function CommentsForm() {
  return (
    <form action="#" className="cs_comment_form cs_white_bg cs_radius_5">
      <h3 className="cs_fs_24 cs_semibold">Post Comemnt</h3>
      <div className="row row cs_gap_y_30">
        <div className="col-lg-12">
          <textarea
            className="cs_gray_bg cs_radius_5 cs_form_field"
            placeholder="Write Comment"
            cols={35}
            rows={8}
            defaultValue={""}
          />
        </div>
        <div className="col-lg-6">
          <input
            className="cs_gray_bg cs_radius_5 cs_form_field"
            type="text"
            placeholder="Your Name*"
          />
        </div>
        <div className="col-lg-6">
          <input
            className="cs_gray_bg cs_radius_5 cs_form_field"
            type="email"
            placeholder="Write Your Email*"
          />
        </div>
        <div className="col-lg-12">
          <button className="cs_btn cs_style_1 w-100">Post Comment</button>
        </div>
      </div>
    </form>
  )
}
