import React, { useState } from "react";
import Header from "components/Layout/Header";
import Accordion from "pages/Accordion";
import Search from "pages/Search";
import DropDown from "pages/Dropdown";
import Translate from "pages/Translate";
import Route from "router";

import { items, options } from "apis/LocalData";

const App: React.FC = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;