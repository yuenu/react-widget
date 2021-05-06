import React from "react";
import Links from "./Links.js";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Links href="/" className="item">
        Accordion
      </Links>
      <Links href="/list" className="item">
        Search
      </Links>
      <Links href="/dropdown" className="item">
        Dropdown
      </Links>
      <Links href="/translate" className="item">
        Translate
      </Links>
    </div>
  );
};

export default Header;
