import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { ContactChoise } from './ContactChoise';
import { ContactChoiseTypes } from '../config/config';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  type: string;
  name: string;
  boxClassName?: string;
  inpClassName?: string;
  placeholder?: string;
  withChoise?: boolean;
  setContactMethod?: (prev: ContactChoiseTypes) => void;
}

export const Input: FC<InputProps> = (props) => {
  const {
    children,
    type,
    boxClassName,
    inpClassName,
    placeholder,
    name,
    withChoise,
    setContactMethod,
    ...otherProps
  } = props;

  if (withChoise) {
    return (
      <div
        className={`relative flex gap-[30px] p-[15px] pl-[30px] rounded-stdRadius bg-mainBgInvC text-mainBg ${boxClassName && boxClassName}`}
      >
        <ContactChoise setContactMethod={setContactMethod} />
        <input
          className={`w-full pl-[120px] ${inpClassName ? inpClassName : ''}`}
          name={name}
          type={type}
          placeholder={placeholder}
          {...otherProps}
          required
        />
      </div>
    );
  }

  return (
    <div
      className={`flex gap-[30px] p-[15px] pl-[30px] rounded-stdRadius bg-mainBgInvC text-mainBg ${boxClassName && boxClassName}`}
    >
      <input
        className={`w-full ${inpClassName ? inpClassName : ''}`}
        name={name}
        type={type}
        placeholder={placeholder}
        {...otherProps}
        required
      />
      {children}
    </div>
  );
};
