import "./Button.scss";
import classNames from "classnames";
import { FC, ReactNode, MouseEvent } from 'react'


interface ButtonProps {
    isPrimary?: boolean;
    isSecondary?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    texto: string;
    svg?: ReactNode;
  }

  const Button: FC<ButtonProps> = ({
    isPrimary = false,
    isSecondary = false,
    onClick,
    texto,
    svg,
  }) => {
    const givenClassName = classNames({
      button: true,
      'button-primary': isPrimary,
      'button-secondary': isSecondary,
    });

    return (
      <button className={givenClassName} onClick={onClick}>
        {texto} {svg && svg}
      </button>
    );
  };

  export default Button;