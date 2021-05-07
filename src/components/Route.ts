import React, { useState, useEffect } from "react";

type Props = {
  path: string
}

const Route: React.FC<Props> = ({ path, children }) => {

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
