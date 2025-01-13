import { PricesTopArticle } from './PricesTopArticle';

export const PricesTop = () => {
    interface popularServicesTypes {
        id: number;
        name: string;
        descr: string;
        price: string;
    }

    const popularServices: popularServicesTypes[] = [
        {
            id: 1,
            name: 'Site 1',
            descr: 'Description',
            price: '100$',
        },
        {
            id: 2,
            name: 'Site 2',
            descr: 'Description',
            price: '100$',
        },
        {
            id: 3,
            name: 'Site 3',
            descr: 'Description',
            price: '100$',
        },
    ];

    return (
        <section className='mb-section'>
            <div className='container'>
                <div className='flex items-center justify-between minusHeaderHeight'>
                    <div>
                        <h1 className='bigTitle max-w-[800px]'>
                            Разработка сайтов, приложений, игр
                        </h1>
                        <h3 className='max-w-[700px] text-sliderNums leading-sliderNums'>
                            Профессиональные решения для вашего бизнеса
                        </h3>
                    </div>
                    <div className='max-w-[650px] w-full flex flex-col gap-[10px] '>
                        {popularServices.map((card) => (
                            <PricesTopArticle key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
