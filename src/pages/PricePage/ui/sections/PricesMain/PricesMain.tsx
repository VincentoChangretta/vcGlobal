import {
    appsPriceCardsData,
    gamesPriceCardsData,
    reworkPriceCardsData,
    websitesPriceCardsData,
} from 'shared/data/data';
import { PricesMainSections } from './ui/PricesMainSections';



const PricePageData = [
    {
        data: appsPriceCardsData,
        title: 'Сайты',
    },
    {
        data: gamesPriceCardsData,
        title: 'Приложения',
    },
    {
        data: reworkPriceCardsData,
        title: 'Игры',
    },
    {
        data: websitesPriceCardsData,
        title: 'Доработка',
    },
];

export const PricesMain = () => {
    
    return (
        <section className='mb-section'>
            <div className='container'>
                {PricePageData.map((item) => (
                    <PricesMainSections
                        key={item.title}
                        title={item.title}
                        data={item.data}
                    />
                ))}
                
            </div>
        </section>
    );
};
