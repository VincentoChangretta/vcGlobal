import { earthImg } from 'shared/images';

export const PricesTop = () => {
  return (
    <section className='mb-section w-1400:pt-[100px] w-750:pt-0'>
      <div className='container'>
        <div className='flex items-center justify-between minusHeaderHeight w-1400:flex-col w-1400:gap-[50px] w-750:min-h-[50svh]'>
          <div className='w-1400:text-center'>
            <h1 className='bigTitle max-w-[800px] text-balance'>
              Разработка сайтов, приложений, игр
            </h1>
            <h3 className='max-w-[700px] text-sliderNums leading-sliderNums text-balance w-1400:mx-auto w-750:text-xl'>
              Профессиональные решения для вашего бизнеса
            </h3>
          </div>
          <div className='max-w-[700px] animate-spinPlanet overflow-x-hidden w-1000:max-w-[500px]'>
            <img className='img' src={earthImg} alt='earth' />
          </div>
        </div>
      </div>
    </section>
  );
};
