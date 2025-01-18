import { LessonsProgramm } from './LessonsProgramm';

export const LessonsPageProgramm = () => {
    return (
        <section>
            <div className='lessons-container'>
                <h2 className='title'>Программа занятий</h2>
                <LessonsProgramm />
            </div>
        </section>
    );
};
