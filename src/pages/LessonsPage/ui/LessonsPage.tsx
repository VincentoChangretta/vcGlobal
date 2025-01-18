import { LessonsPageExpert } from './sections/LessonsPageExpert';
import { LessonsPageTop } from './sections/LessonsPageTop';
import { LessonsPageWWD } from './sections/LessonsPageWWD';
import { LessonsPageProgramm } from './sections/Programm/LessonsPageProgramm';

const LessonsPage = () => {
    return (
        <>
            <LessonsPageTop />
            <LessonsPageWWD />
            <LessonsPageExpert />
            <LessonsPageProgramm />
        </>
    );
};

export default LessonsPage;
