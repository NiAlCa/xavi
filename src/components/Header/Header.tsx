import { LogoData } from "../../data/LogoData.mock";
import { Rrss } from "../../data/Rrss.mock";
import { Logo } from "../Logo/Logo";
import RrssBar from "../RrssBar/RrssBar";
import "./Header.scss";

interface HomePageProps {
  image: string;
}

export function Header({ image }: HomePageProps) {
  return (
    <div
      className="Header"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        width: "99.1vw",
        height: "100vh",
      }}
    >
      <div className="HeaderLogo">

        <Logo
        image={LogoData[0].image}
        />

      </div>

      <div className="HeaderRrss">
      <RrssBar rsData={Rrss} />
      </div>
    </div>
  );
}
