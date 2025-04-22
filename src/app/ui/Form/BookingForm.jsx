import { Icon } from "@iconify/react";

export default function BookingForm() {
  return (
    <form action="" className="cs_booking_form">
      <div className="cs_input_field position-relative">
        <span>
          <Icon icon="fa:user" />
        </span>
        <input
          type="text"
          placeholder="Your Name*"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="cs_input_field position-relative">
        <span>
          <Icon icon="fa:envelope" />
        </span>
        <input
          type="email"
          placeholder="Your Email*"
          className="cs_form_field cs_radius_5"
        />
      </div>
      <div className="cs_input_field position-relative">
        <span>
          <Icon icon="fa:comment" />
        </span>
        <textarea
          rows={5}
          className=""
          placeholder="Message"
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="cs_btn cs_style_1 cs_fs_18 cs_medium cs_radius_4"
      >
        Send Message
      </button>
    </form>
  )
}
