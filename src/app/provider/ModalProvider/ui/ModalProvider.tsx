import { FC, ReactNode, useState } from 'react';
import { ModalContext } from '../lib/ModalContext';

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen, modalData, setModalData }}>
            {children}
        </ModalContext.Provider>
    );
};
