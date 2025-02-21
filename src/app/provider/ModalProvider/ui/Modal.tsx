import { FC, ReactNode, useEffect, useRef } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { ModalService } from './ModalContent/ModalService';
import { LessonsForm } from 'app/provider/ModalProvider/ui/ModalContent/LessonsForm';
import { modalDataVariations } from 'shared/constants/constants';
import { ModalOrder } from './ModalContent/ModalOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

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
    } else if (modalData.type === modalDataVariations.ORDER.type) {
      return <ModalOrder />;
    }
  };

  if (!isOpen) return null;
  return (
    <div className='fixed inset-0 z-[9999] flex justify-center items-center backdrop-blur-[20px]'>
      <div
        ref={modalRef}
        className='relative p-[30px] pr-[80px] rounded-stdRadius w-full max-w-[720px] bg-mainBgInv text-mainBg w-550:p-[15px] w-550:pr-[50px]'
        // onClick={(e) => e.stopPropagation()}
      >
        <button className='closeButton' onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </button>
        {children}
        <div>{setModalContent(modalData)}</div>
      </div>
    </div>
  );
};
