import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import Convert from "./Convert.js";

// const API_key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Chinese",
    value: "zh-TW",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
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
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
