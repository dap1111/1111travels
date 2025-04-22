import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div
      className={`cs_accordian cs_style_1 cs_white_bg cs_radius_5 ${
        isOpen ? 'active' : ''
      }`}
    >
      <h3
        className="cs_accordian_head cs_fs_20 cs_semibold mb-0"
        onClick={onClick}
      >
        <span>{title}</span>
        <span className="cs_accordian_toggle cs_center">
          <i>
            <Icon icon="fa6-solid:eye" />
          </i>
          <i>
            <Icon icon="fa6-solid:eye-slash" />
          </i>
        </span>
      </h3>
      <div className={`cs_accordian_body ${isOpen ? '' : 'd-none'}`}>
        {content}
      </div>
    </div>
  );
};

export default function Accordion({ data }) {
  const [openItemIndex, setOpenItemIndex] = useState(-1); // Initialize with -1 for no item open initially
  const [firstItemOpen, setFirstItemOpen] = useState(true); // Set the first item to open initially

  const handleItemClick = index => {
    if (index === openItemIndex) {
      setOpenItemIndex(-1);
    } else {
      setOpenItemIndex(index);
    }
  };
  useEffect(() => {
    // Open the first item when the component mounts
    if (firstItemOpen) {
      setOpenItemIndex(2);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);
  return (
    <div className="cs_accordian_wrap">
      {data?.map((elements, index) => (
        <AccordionItem
          key={index}
          title={elements.title}
          content={elements.content}
          isOpen={index === openItemIndex}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}
