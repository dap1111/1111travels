import { Icon } from '@iconify/react'


export default function ContactForm() {
  return (
    <div className="container">
      <form className="cs_contact_form row cs_gap_y_24">
        <div className="col-lg-6">
          <div className="cs_input_field">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="cs_form_field cs_radius_5"
            />
            <span>
              <Icon icon="fa:user-o" />
            </span>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cs_input_field">
            <input
              className="cs_form_field cs_radius_5 cs_white_bg"
              type="email"
              placeholder="Enter Your E-Mail"
            />
            <span>
              <Icon icon="fa:envelope-o" />
            </span>
          </div>
        </div>
        <div className="col-lg-12">
          <input
            className="cs_form_field cs_radius_5 cs_white_bg"
            type="text"
            placeholder="Select Subjects"
          />
        </div>
        <div className="col-lg-12">
          <textarea
            rows={5}
            className="cs_form_field cs_radius_5 cs_white_bg"
            placeholder="Write Message..."
            defaultValue={""}
          />
        </div>
        <div className="col-lg-12 text-center">
          <button
            type="submit"
            className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_radius_4"
          >
            <Icon icon="fa:envelope-o" /> Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
