import { createContext } from 'react';
import { modalDataTypes } from '../ui/Modal';

export interface ModalContextProps {
    isOpen?: boolean;
    setIsOpen?: (prev: boolean) => void;
    modalData?: modalDataTypes;
    setModalData?: (service: object) => void;
}

export const ModalContext = createContext<ModalContextProps>({});
