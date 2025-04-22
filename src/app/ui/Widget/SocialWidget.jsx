import { Icon } from "@iconify/react";

export default function SocialWidget() {
  return (
    <div className="cs_social_btns cs_primary_color">
      <a href="#"><i className="fa-brands fa-facebook-f"><Icon icon="fa-brands:facebook-f" /></i></a>
      <a href="#"><i className="fa-brands fa-twitter"><Icon icon="fa:twitter" /></i></a>
      <a href="#"><i className="fa-brands fa-instagram"><Icon icon="fa6-brands:instagram" /></i></a>
      <a href="#"><i className="fa-brands fa-linkedin-in"><Icon icon="fa-brands:linkedin-in" /></i></a>
    </div>
  )
}
