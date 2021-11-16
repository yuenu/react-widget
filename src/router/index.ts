import Accordion from 'pages/Accordion';
import DropDown from 'pages/Dropdown';
import DropAndDrag from 'pages/DropAndDrag';
import Search from 'pages/Search';
import Translate from 'pages/Translate';
import React, { useState, useEffect } from "react";

type Props = {
  path: string
}

export const routesData: {[key: string]: React.FC<any>} = {
  '/': Accordion,
  '/dropdown': DropDown,
  '/search': Search,
  '/translate': Translate,
  '/dropanddrag': DropAndDrag,
}

const Route: React.FC<Props> = ({ path, children }) => {
  document.querySelectorAll('[href^="/"]').forEach(el => console.log(el))

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? (children  as React.ReactElement) : null;
};

export default Route;
