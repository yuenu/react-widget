import React from "react";

type Props = {
  className: string;
  href: string;
  role?: string,
  children: React.ReactElement | React.ReactElement[] | string
};

const Links = ({ className, href, children, role }: Props) => {
  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.metaKey || e.ctrlKey) return;

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onLinkClick} className={className} href={href} role={role}>
      {children}
    </a>
  );
};

export default Links;
