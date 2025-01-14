import { FC, ReactNode } from 'react';
import { Button } from 'shared/ui/Button';

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<modalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className='fixed inset-0 flex justify-center items-center backdrop-blur'>
            <div className='relative'>
                <Button
                    className='absolute top-[20px] right-[20px]'
                    onClick={onClose}
                >
                    X
                </Button>
                {children}
                Barev ara ya!
            </div>
        </div>
    );
};
