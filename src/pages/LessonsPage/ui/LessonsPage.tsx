import { LessonsPageExpert } from './sections/LessonsPageExpert';
import { LessonsPageTop } from './sections/LessonsPageTop';
import { LessonsPageWWD } from './sections/LessonsPageWWD';
import { LessonsPageProgramm } from './sections/Programm/LessonsPageProgramm';
import { LessonsContact } from './sections/LessonsContacts';

const LessonsPage = () => {
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
