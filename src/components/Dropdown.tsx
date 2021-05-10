import React, { useState, useEffect, useRef } from "react";

// Type
import { Option } from "../apis/LocalData";

type Props = {
  label: string;
  options: Option[];
  selected: Option;
  onSelectedChange: (option: Option) => void;
};

// type HandleMouseClickType =  {
//   target: EventTarget
// }

const DropDown: React.FC<Props> = ({
  options,
  selected,
  onSelectedChange,
  label,
}) => {
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: Fine out the click event type
    const onBodyClick = (event: any) => {
      if (formRef.current && formRef.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const rederedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div ref={formRef} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {rederedOptions}
            </div>
          </div>
        </div>
      </div>
      <div className="ui message">
        <div className="header">Change color text</div>
        <p style={{ color: selected.value }}>Here is change color text. </p>
      </div>
    </>
  );
};

export default DropDown;
