import React from "react";
import { IconContext } from "react-icons";
import "./RrssBar.scss";

interface RsItem {
  Rs: string;
  url: string;
  icon: React.ReactNode;
  text?: string;
}

interface BarProps {
  rsData: RsItem[];
}

const RrssBar: React.FC<BarProps> = ({ rsData }) => {
  return (
      <div className="link-container">
        <IconContext.Provider value={{ size: "35px" }}>
          {rsData.map((rsItem, index) => (
            <div key={index} className="link-wrapper">
              <a
                href={rsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="links"
              >
                <span className="icon">{rsItem.icon}</span>
                <div className="textos">
                  <span>{rsItem.Rs}</span>
                  {rsItem.text && <p>{rsItem.text}</p>}
                </div>
              </a>
            </div>
          ))}
        </IconContext.Provider>
      </div>
  );
};

export default RrssBar;
