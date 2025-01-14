import { MainDevsTools } from 'pages/MainDevsPage/ui/sections/MainDevsTools';
import { PricesMain } from './sections/PricesMain/PricesMain';
import { PricesTop } from './sections/PricesTop/PricesTop';

const PricePage = () => {
    return (
        <>
            <PricesTop />
            <PricesMain />
            <MainDevsTools />
        </>
    );
};

export default PricePage;
