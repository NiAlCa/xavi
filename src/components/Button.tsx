import "./Button.scss";
import classNames from "classnames";
import { FC } from 'react'


interface ButtonProps {
    isPrimary?: boolean;
    isSecondary?: boolean;
    isTickets?: boolean;
    isFollow?: boolean;
    onClick?: () => void;
    widthValue?: string;
    heightValue?: string;
    texto?: string;
    colorTexto?: string;
  }

  const Button: FC<ButtonProps> = ({
    isPrimary,
    isSecondary,
    isTickets,
    isFollow,
    onClick,
    widthValue,
    heightValue,
    texto,
    colorTexto,
  }) => {
    const givenClassName = classNames({
      button: true,
      'button-primary': isPrimary,
      'button-secondary': isSecondary,
      'button-follow': isFollow,
      'button-tickets': isTickets,
    });

    return (
      <button className={givenClassName} onClick={onClick} style={{ width: widthValue, height: heightValue }}>
        {texto} {colorTexto}
      </button>
    );
  };

  export default Button;