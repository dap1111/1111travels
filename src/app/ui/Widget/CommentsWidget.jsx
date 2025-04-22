import CommentsForm from '../Form/CommentsForm'

export default function CommentsWidget() {
  return (
    <div className="cs_comments">
      <h3 className="cs_fs_24 cs_semibold">Comment</h3>
      <ol className="cs_comment_list cs_mp0">
        <li className="cs_comment">
          <div className="cs_comment_body">
            <div className="cs_comment_author cs_fs_20 cs_medium cs_primary_color">
              <img src="/images/avatar_5.jpeg" alt="Avatar" />
              <a href="#">Martha Grey</a>
            </div>
            <p className="cs_comment_subtitle">
              Ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea
              in imperdiet assueverit contentiones, an his cib.
            </p>
            <div className="cs_reply_btn">
              <a className="cs_reply_link cs_radius_5" href="#">
                Reply
              </a>
            </div>
          </div>
        </li>
      </ol>
      <CommentsForm />
    </div>
  )
}
