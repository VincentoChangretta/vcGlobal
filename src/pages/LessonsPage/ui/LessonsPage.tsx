import { Link } from 'react-router-dom';
import { LessonsPageExpert } from './sections/LessonsPageExpert';
import { LessonsPageTop } from './sections/LessonsPageTop';
import { LessonsPageWWD } from './sections/LessonsPageWWD';
import { LessonsPageProgramm } from './sections/Programm/LessonsPageProgramm';
import { LessonsContact } from './sections/LessonsContacts';
import { useUrlChanger } from 'shared/lib/UrlChanger/useUrlChanger';

const LessonsPage = () => {
    const { hash, navigate } = useUrlChanger();
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
