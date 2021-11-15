import React, { useState } from "react";

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
    window.history.pushState({url: 'dropdown'}, '', )

  }
  return (
    <div className="ui styled accordion">
      <h1>javascript version</h1>
      {(typeof window.onpopstate === 'object') + ''}
      <hr />
      {(typeof PopStateEvent === 'function') + ''}
      <hr />
      <a onClick={RouterClcik} href="/dropdown" >Chnage router</a>
      {renderedItems}
    </div>
  );
};

export default Accordion;
