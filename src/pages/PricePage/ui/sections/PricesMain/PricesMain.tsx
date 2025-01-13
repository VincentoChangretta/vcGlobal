import { appsPriceCardsData, gamesPriceCardsData, reworkPriceCardsData, websitesPriceCardsData } from 'shared/data/data';
import { PricesMainSections } from './PricesMainSections';

export const PricesMain = () => {
    return (
        <section className='mb-section'>
            <div className='container'>
                <PricesMainSections title='Сайты' data={websitesPriceCardsData} />
                <PricesMainSections title='Приложения' data={appsPriceCardsData} />
                <PricesMainSections title='Игры' data={gamesPriceCardsData} />
                <PricesMainSections title='Доработка' data={reworkPriceCardsData} />
            </div>
        </section>
    );
};
