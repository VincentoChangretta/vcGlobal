import { FC, ReactNode, useEffect, useRef } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { ModalService } from './ModalContent/ModalService';
import { LessonsForm } from 'pages/LessonsPage/ui/sections/Programm/LessonsForm';
import { modalDataVariations } from 'shared/constants/constants';

export interface allModalDataTypes {
    type: string;
}
export type modalDataTypes = ServicePriceTypes | allModalDataTypes;

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    modalData: modalDataTypes;
    children?: ReactNode;
}

export const Modal: FC<modalProps> = ({
    isOpen,
    onClose,
    modalData,
    children,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const closeModal = (e: MouseEvent) => {
            if (modalRef && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mouseup', closeModal);
        return () => document.removeEventListener('mouseup', closeModal);
    }, []);

    const setModalContent = (modalData: modalDataTypes): ReactNode => {
        if (modalData.type === modalDataVariations.SERVICE.type) {
            return <ModalService modalData={modalData} />;
        } else if (modalData.type === modalDataVariations.LESSONS_FORM.type) {
            return <LessonsForm />;
        }
    };

    if (!isOpen) return null;
    return (
        <div className='fixed inset-0 z-50 flex justify-center items-center backdrop-blur-[20px]'>
            <div
                ref={modalRef}
                className='relative p-[30px] pr-[80px] rounded-stdRadius w-full max-w-[720px] bg-mainBgInv text-mainBg'
                onClick={(e) => e.stopPropagation()}
            >
                <button className='closeButton' onClick={onClose}>
                    X
                </button>
                {children}
                <div>{setModalContent(modalData)}</div>
            </div>
        </div>
    );
};
