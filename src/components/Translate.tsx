import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// const API_key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

import {Langs} from '../apis/LocalData'


const Translate: React.FC = () => {
  const [language, setLanguage] = useState(Langs[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={Langs}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
