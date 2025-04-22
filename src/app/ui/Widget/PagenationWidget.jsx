import { Icon } from '@iconify/react'

export default function PagenationWidget() {
  return (
    <ul className="cs_pagination_box cs_mp0">
      <li>
        <a className="cs_pagination_item cs_center cs_fs_18 cs_medium active" href="#">1</a>
      </li>
      <li>
        <a className="cs_pagination_item cs_center cs_fs_18 cs_medium" href="#">2</a>
      </li>
      <li>
        <a className="cs_pagination_item cs_center cs_fs_18 cs_medium" href="#">3</a>
      </li>
      <li>
        <a href="#" className="cs_pagination_item cs_center cs_fs_18 cs_medium">
          <Icon icon="fa-solid:chevron-right" />
        </a>
      </li>
    </ul>
  )
}
