import React, { useState } from "react";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
console.log(history)

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
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

  window.addEventListener('popstate', ps)
  
  function ps (ev) {
    console.log('popstate', ev)
  }

  const RouterClcik = (ev) => {
    ev.preventDefault()
    history.push('/dropdown')
  }
  return (
    <div className="ui styled accordion">
      {(typeof window.onpopstate === 'object') + ''}
      <a href="/dropdown" onClick={RouterClcik}>Chnage router</a>
      {renderedItems}
    </div>
  );
};

export default Accordion;
