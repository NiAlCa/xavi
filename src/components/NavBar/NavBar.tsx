import React from "react";
import classNames from "classnames";
import "./NavBar.scss"

interface RsItem {
  Rs: string;
  url: string;
}

interface NavbarProps {
  rsData: RsItem[];
}

const Navbar: React.FC<NavbarProps> = ({ rsData }) => {
  return (
    <nav className="link-container">
      {rsData.map((rsItem, index) => (
        <div key={index}>
          <a
            href={rsItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames("links", {})}
          >
            {rsItem.Rs}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
