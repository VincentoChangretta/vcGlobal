import { MainTextSliderData } from 'shared/data/data';
import { philosopher } from 'shared/images';
import { TextSlider } from 'shared/ui/TextSlider';

export const MainDevsTop = () => {
  return (
    <section className='mb-section'>
      <div className='relative container'>
        <div className='flex items-center justify-between gap-[40px] w-1140:flex-col w-1140:justify-center w-750:justify-start w-750:items-center'>
          <div className='flex max-w-[600px] w-full flex-col items-start justify-center minusHeaderHeight w-1140:justify-start w-1140:min-h-fit w-1140:items-center'>
            <h1 className='relative max-w-[600px] w-full flex text-8xl font-extrabold pb-[110px] mb-[30px] w-1350:text-7xl w-1140:text-center w-820:text-6xl w-820:pb-[80px] w-820:mb-[15px] w-530:text-5xl w-530:pb-[70px] w-420:text-[36px] w-420:pb-[60px]'>
              <div className='w-full w-1140:text-center'>Мы</div>
              <TextSlider
                textArray={MainTextSliderData}
                speed={2500}
                className={`absolute bottom-0 left-0 w-1140:left-2/4 w-1140:-translate-x-2/4`}
              />
            </h1>
            <h3 className='text-2xl text-pretty w-1140:text-center w-820:text-xl w-530:text-lg w-420:text-base'>
              Твой партнер и творец цифровых миров!
            </h3>
          </div>
          <div className='absolute top-[-20px] right-0 max-w-[750px] w-1450:max-w-[580px] w-1450:top-2/4 w-1450:-translate-y-2/4 w-1140:static w-1140:translate-y-0 w-680:w-[90%]'>
            <img
              className='relative z-[1000] animate-animSmallMove '
              src={philosopher}
              alt='main img'
            />
            <span className='lightBall top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[350px] h-[350px] bg-orangeMain animate-pulse w-680:w-[50%] w-680:h-[50%] w-680:blur-[80px]'></span>
          </div>
        </div>
      </div>
    </section>
  );
};
