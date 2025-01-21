import { Button } from 'shared/ui/Button';
import { LessonsProgramm } from './LessonsProgramm';
import { ModalContext, useModal } from 'app/provider/ModalProvider';
import { useContext } from 'react';
import { modalDataVariations } from 'shared/constants/constants';

export const LessonsPageProgramm = () => {
    const { openModal } = useModal();
    const { setModalData } = useContext(ModalContext);

    const setModal = () => {
        setModalData(modalDataVariations.LESSONS_FORM);
        openModal();
    };

    return (
        <section className='mb-section' id='programm'>
            <div className='lessons-container'>
                <h2 className='title'>Программа занятий</h2>
                <LessonsProgramm />
                <Button className='mx-auto' onClick={() => setModal()}>
                    Записаться
                </Button>
            </div>
        </section>
    );
};
