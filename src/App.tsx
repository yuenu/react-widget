import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

import { items, options } from "./apis/LocalData";

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

// return (
//   <div className="ui container">
//     <Header />
//     <Route path="/">
//       <Accordion items={items} />
//     </Route>
//     <Route path="/list">
//       <Search />
//     </Route>
//     <Route path="/dropdown">
//       <DropDown
//         label="Select a color"
//         options={options}
//         selected={selected}
//         onSelectedChange={setSelected}
//       />
//     </Route>
//     <Route path="/translate">
//       <Translate />
//     </Route>
//   </div>
// );
