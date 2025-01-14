import { FC, ReactNode, useState } from 'react';
import { ModalContext } from '../lib/ModalContext';

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </ModalContext.Provider>
    );
};
