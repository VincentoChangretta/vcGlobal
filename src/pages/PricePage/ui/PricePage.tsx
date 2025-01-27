import { MainDevsTools } from 'pages/MainDevsPage/ui/sections/MainDevsTools';
import { PricesMain } from './sections/PricesMain/PricesMain';
import { PricesTop } from './sections/PricesTop/PricesTop';
<<<<<<< HEAD
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
import { MainDevsFeedbacks } from 'pages/MainDevsPage/ui/sections/MainDevsFeedbacks/MainDevsFeedbacks';
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';

const PricePage = () => {
    useScrollToTop();
=======
import { MainDevsFeedbacks } from 'pages/MainDevsPage/ui/sections/MainDevsFeedbacks/MainDevsFeedbacks';
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';
import { useScrollToId } from 'shared/lib/ScrollToId/useScrollToId';
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';

const PricePage = () => {
    useScrollToTop();
    useScrollToId();
>>>>>>> 2c55666be54eb38183a3efc99fca8d749893b799
    return (
        <>
            <PricesTop />
            <PricesMain />
            <MainDevsTools />
<<<<<<< HEAD
            <MainDevsFeedbacks/>
            <LessonsContact/>
=======
            <MainDevsFeedbacks />
            <LessonsContact />
>>>>>>> 2c55666be54eb38183a3efc99fca8d749893b799
        </>
    );
};

export default PricePage;
