import { LessonsPageExpert } from './sections/LessonsPageExpert';
import { LessonsPageTop } from './sections/LessonsPageTop';
import { LessonsPageWWD } from './sections/LessonsPageWWD';
import { LessonsPageProgramm } from './sections/Programm/LessonsPageProgramm';
import { LessonsContact } from './sections/LessonsContacts';
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
import { useScrollToId } from 'shared/lib/ScrollToId/useScrollToId';

const LessonsPage = () => {
    useScrollToTop();
    useScrollToId();
    return (
        <>
            <LessonsPageTop />
            <LessonsPageWWD />
            <LessonsPageExpert />
            <LessonsPageProgramm />
            <LessonsContact />
        </>
    );
};

export default LessonsPage;
