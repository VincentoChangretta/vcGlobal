import { FC, useEffect } from 'react';

interface useCloseModalProps {
  ref: React.RefObject<HTMLElement>;
  stateChanger: (prev: boolean) => void;
}

export const useCloseModal: FC<useCloseModalProps> = (props) => {
  const { ref, stateChanger } = props;
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        stateChanger(false);
      }
    };

    document.addEventListener('click', closeModal);
    return () => {
      document.removeEventListener('click', closeModal);
    };
  });

  return null;
};
