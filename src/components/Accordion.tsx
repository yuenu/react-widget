import React, { useState } from "react";

// Type
import { Item } from '../apis/LocalData'

export type Props = {
  items: Item[]
}

const Accordion: React.FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onTitleClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          <div style={{ userSelect: "none", display: "inline" }}>
            {item.title}
          </div>
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
