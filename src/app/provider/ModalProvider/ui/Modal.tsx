import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { ModalService } from './ModalContent/ModalService';

export enum modalDataEnum {
    serviceObj = 'service',
}

interface allModalDataTypes {
    type: String;
}

type modalDataTypes = ServicePriceTypes | allModalDataTypes;

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

    const setModalContent = (modalData: modalDataTypes) => {
        if (modalData.type === modalDataEnum.serviceObj) {
            return <ModalService modalData={modalData} />;
        }
    };

    if (!isOpen) return null;
    return (
        <div className=' fixed inset-0 flex justify-center items-center backdrop-blur'>
            <div
                ref={modalRef}
                className='relative p-[30px] pr-[80px] rounded-stdRadius w-full max-w-[700px] bg-mainBgInv text-mainBg'
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
