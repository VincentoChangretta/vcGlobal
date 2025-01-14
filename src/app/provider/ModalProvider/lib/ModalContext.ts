import { createContext } from 'react';

export interface ModalContextProps {
    isOpen?: boolean;
    setIsOpen?: (prev: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({});
