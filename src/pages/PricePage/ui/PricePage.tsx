import { MainDevsTools } from 'pages/MainDevsPage/ui/sections/MainDevsTools';
import { PricesMain } from './sections/PricesMain/PricesMain';
import { PricesTop } from './sections/PricesTop/PricesTop';
import { MainDevsFeedbacks } from 'pages/MainDevsPage/ui/sections/MainDevsFeedbacks/MainDevsFeedbacks';
import { LessonsContact } from 'pages/LessonsPage/ui/sections/LessonsContacts';

const PricePage = () => {
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
