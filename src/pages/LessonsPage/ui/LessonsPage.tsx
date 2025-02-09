import { LessonsPageExpert } from './sections/LessonsPageExpert';
import { LessonsPageTop } from './sections/LessonsPageTop';
import { LessonsPageWWD } from './sections/LessonsPageWWD';
import { LessonsPageProgramm } from './sections/Programm/LessonsPageProgramm';
import { LessonsContact } from './sections/LessonsContacts';
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
import { LessonsPrices } from './sections/LessonsPrices';

const LessonsPage = () => {
    useScrollToTop();
    return (
        <>
            <LessonsPageTop />
            <LessonsPrices />
            <LessonsPageWWD />
            <LessonsPageExpert />
            <LessonsPageProgramm />
            <LessonsContact />
        </>
    );
};

export default LessonsPage;
