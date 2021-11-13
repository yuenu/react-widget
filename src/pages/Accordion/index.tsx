import React, { useState } from "react";
// Type
import { Item } from "apis/LocalData";

export type Props = {
  items: Item[];
};

const Accordion: React.FC<Props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  ////////////////////////////
  // Testing code
  const hasHistory = typeof window.history.pushState === 'function'
  const changePathname = () => {
    // navigate('/list')
    window.location.pathname = '/list'
  }

  const locationReplcae = () => {
    const url = window.location.origin + '/dropdown'
    window.location.replace(url)
  }

  const originRoute = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.history.pushState({url: 'dropdown'}, '', 'dropdown');

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  }

  /////////////////////////
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

  return (
    <>
      pushState: {hasHistory + ''}
      <button onClick={changePathname}>changePathname</button>
      <button onClick={locationReplcae}>locationReplcae</button>
      <button onClick={originRoute}>originRoute</button>
      <div className="ui styled accordion">
        {renderedItems}
      </div>
    </>
)}

export default Accordion;
