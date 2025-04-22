import BookingForm from '../Form/BookingForm';

export default function BookingWidget({ title }) {
  return (
    <div className="cs_booking_widget cs_gray_bg">
      <h3 className="cs_widget_title cs_fs_24 cs_medium">{title}</h3>
      <BookingForm />
    </div>
  );
}
