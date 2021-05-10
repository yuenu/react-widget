import React from "react";

type Props = {
  className: string;
  href: string;
};

const Links: React.FC<Props> = ({ className, href, children }) => {
  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onLinkClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Links;
