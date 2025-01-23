import { HelperForm } from 'widgets/HelperForm/HelperForm';
import { MainDevsAdvantages } from './sections/MainDevsAdvantages';
import { MainDevsServices } from './sections/MainDevsServices';
import { MainDevsTop } from './sections/MainDevsTop';
import { MainDevsTeam } from './sections/MainDevsTeam/MainDevsTeam';
import { MainDevsAboutWork } from './sections/MainDevsAboutWork';
import { MainDevsTools } from './sections/MainDevsTools';
import { MainDevsFeedbacks } from './sections/MainDevsFeedbacks/MainDevsFeedbacks';
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';

const MainDevsPage = () => {
    return (
        <>
            <MainDevsTop />
            <MainDevsServices />
            <MainDevsAdvantages />
            <HelperForm />
            <MainDevsTeam />
            <MainDevsAboutWork />
            <MainDevsTools />
            <MainDevsFeedbacks />
            <LessonsContact />
        </>
    );
};

export default MainDevsPage;
