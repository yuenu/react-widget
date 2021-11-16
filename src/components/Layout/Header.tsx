import React from "react";
import Links from "./Links";

const Header: React.FC = () => {
  return (
    <div className="ui secondary pointing menu">
      <Links href="/" className="item" role="navigate">
        Accordion
      </Links>
      <Links href="/list" className="item" role="navigate">
        Search
      </Links>
      <Links href="/dropdown" className="item" role="navigate">
        Dropdown
      </Links>
      <Links href="/translate" className="item" role="navigate">
        Translate
      </Links>
      <Links href="/dropanddrag" className="item" role="navigate">
        Drop and Drag
      </Links>
    </div>
  );
};

export default Header;
