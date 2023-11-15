import "./Button.scss";
import classNames from "classnames";
import { FC } from 'react'


interface ButtonProps {
    isPrimary?: boolean;
    isSecondary?: boolean;
    isTickets?: boolean;
    isFollow?: boolean;
    onClick?: () => void;
    texto?: string;
  }

  const Button: FC<ButtonProps> = ({
    isPrimary,
    isSecondary,
    isTickets,
    isFollow,
    onClick,
    texto,
  }) => {
    const givenClassName = classNames({
      button: true,
      'button-primary': isPrimary,
      'button-secondary': isSecondary,
      'button-follow': isFollow,
      'button-tickets': isTickets,
    });

    return (
      <button className={givenClassName} onClick={onClick}>
        {texto}
      </button>
    );
  };

  export default Button;