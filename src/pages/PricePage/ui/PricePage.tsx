import { MainDevsTools } from 'pages/MainDevsPage/ui/sections/MainDevsTools';
import { PricesMain } from './sections/PricesMain/PricesMain';
import { PricesTop } from './sections/PricesTop/PricesTop';
import { MainDevsFeedbacks } from 'pages/MainDevsPage/ui/sections/MainDevsFeedbacks/MainDevsFeedbacks';
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';
import { useScrollToTop } from 'shared/lib/ScrollToTop/useScrollToTop';
import { useScrollToId } from 'shared/lib/ScrollToId/useScrollToId';

const PricePage = () => {
    useScrollToTop();
    useScrollToId()

    return (
        <>
            <PricesTop />
            <PricesMain />
            <MainDevsTools />
            <MainDevsFeedbacks />
            <LessonsContact />
        </>
    );
};

export default PricePage;
