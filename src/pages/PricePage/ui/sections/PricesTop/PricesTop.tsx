import { earthImg } from 'shared/images';

export const PricesTop = () => {
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
                    <div className='max-w-[700px] animate-spinPlanet'>
                        <img className='img' src={earthImg} alt='earth' />
                    </div>
                </div>
            </div>
        </section>
    );
};
