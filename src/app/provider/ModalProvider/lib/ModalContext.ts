import { createContext } from 'react';

export interface ModalContextProps {
    isOpen?: boolean;
    setIsOpen?: (prev: boolean) => void;
    modalData?: object;
    setModalData?: (service: object) => void;
}

export const ModalContext = createContext<ModalContextProps>({});
