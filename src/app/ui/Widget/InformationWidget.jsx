import Rating from "../Rating/Rating";
import BookingWidget from "./BookingWidget";

export default function InformationWidget() {
  return (
    <div className="cs_info_widget cs_white_bg">
      <h3 className="cs_widget_title cs_fs_24 cs_medium">
        Basic Information:
      </h3>
      <p className="cs_widget_subtitle">
        Aliquam lorem ante, dapibus in, viverra quis, feugiat viverra nulla
        ut metus varius laoreet. Quisque
      </p>
      <ul className="cs_info_list cs_mp0">
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Destination
          </h3>
          <p className="cs_info_subtitle mb-0">Iceberg,Greenland</p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Duration
          </h3>
          <p className="cs_info_subtitle mb-0">3 Days 2 Nights</p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Departure
          </h3>
          <p className="cs_info_subtitle mb-0">Square, Old Town</p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Departure Time
          </h3>
          <p className="cs_info_subtitle mb-0">mately 8.30AM</p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Return Time
          </h3>
          <p className="cs_info_subtitle mb-0">Approximately 7.30PM</p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Dress Code
          </h3>
          <p className="cs_info_subtitle mb-0">
            Casual <br /> comfortable and light
          </p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Included
          </h3>
          <p className="cs_info_subtitle mb-0">
            Airport Transfer,
            <br /> Personal Guide
          </p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Not Included
          </h3>
          <p className="cs_info_subtitle mb-0">Gallery Ticket, Lunch</p>
        </li>
        <li className="cs_info_item">
          <h3 className="cs_info_title cs_fs_16 cs_semibold mb-0">
            Reviews
          </h3>
          <Rating ratingNumber={4} />
        </li>
      </ul>
      <BookingWidget title='Drop Messege For Book' />
    </div>
  )
}
