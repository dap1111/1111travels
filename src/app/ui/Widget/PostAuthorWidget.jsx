import SocialWidget from './SocialWidget';

export default function PostAuthorWidget() {
  return (
    <div className="cs_post_author">
      <div className="cs_author_top d-flex">
        <div className="cs_author_thumb">
          <img src="/images/avatar_4.jpeg" alt="Avatar" />
        </div>
        <div className="cs_author_info">
          <h3 className="cs_author_title cs_fs_20 cs_medium mb-0">
            Nancy Cruz
          </h3>
          <p className="cs_author_subtitle mb-0">
            Traveller,Blogger & Photographer
          </p>
        </div>
      </div>
      <div className="cs_author_bottom d-flex">
        <SocialWidget />
        <p className="mb-0">
          The foreign and commonwealth office draws up an extensive list of
          countries that should not be travelled to quite regularly and it is
          from that our, and other global travel insurance providers, under
          writers decide which countries travel insurance should be provided
          for. We look at the government travel advice and decide from that
          whether
        </p>
      </div>
    </div>
  );
}
