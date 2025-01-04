import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  classname?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { name, className, ...otherProps } = props;
  return (
    <button className={`button ${className ? className : ""}`} {...otherProps}>
      {name}
    </button>
  );
};
