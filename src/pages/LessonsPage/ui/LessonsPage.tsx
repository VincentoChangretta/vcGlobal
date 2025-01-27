import { LessonsPageExpert } from './sections/LessonsPageExpert';
import { LessonsPageTop } from './sections/LessonsPageTop';
import { LessonsPageWWD } from './sections/LessonsPageWWD';
import { LessonsPageProgramm } from './sections/Programm/LessonsPageProgramm';
import { LessonsContact } from './sections/LessonsContacts';
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
<<<<<<< HEAD

const LessonsPage = () => {
    useScrollToTop();
=======
import { useScrollToId } from 'shared/lib/ScrollToId/useScrollToId';

const LessonsPage = () => {
    useScrollToTop();
    useScrollToId();
>>>>>>> 2c55666be54eb38183a3efc99fca8d749893b799
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
