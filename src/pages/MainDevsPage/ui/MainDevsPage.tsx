import { HelperForm } from 'widgets/HelperForm/HelperForm';
import { MainDevsAdvantages } from './sections/MainDevsAdvantages';
import { MainDevsServices } from './sections/MainDevsServices';
import { MainDevsTop } from './sections/MainDevsTop';
import { MainDevsTeam } from './sections/MainDevsTeam/MainDevsTeam';
import { MainDevsAboutWork } from './sections/MainDevsAboutWork';
import { MainDevsTools } from './sections/MainDevsTools';
import { MainDevsFeedbacks } from './sections/MainDevsFeedbacks/MainDevsFeedbacks';
<<<<<<< HEAD
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';

const MainDevsPage = () => {
    useScrollToTop();

=======
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
import { useScrollToId } from 'shared/lib/ScrollToId/useScrollToId';

const MainDevsPage = () => {
    useScrollToTop();
    useScrollToId();
>>>>>>> 2c55666be54eb38183a3efc99fca8d749893b799
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
<<<<<<< HEAD
            <LessonsContact/>
=======
            <LessonsContact />
>>>>>>> 2c55666be54eb38183a3efc99fca8d749893b799
        </>
    );
};

export default MainDevsPage;
