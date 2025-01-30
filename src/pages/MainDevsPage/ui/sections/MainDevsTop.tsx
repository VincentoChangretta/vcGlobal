import { MainTextSliderData } from 'shared/data/data';
import { appImg, earthImg, philosopher } from 'shared/images';
import { TextSlider } from 'shared/ui/TextSlider';

export const MainDevsTop = () => {
    return (
        <section>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col items-start justify-center minusHeaderHeight'>
                        <div className='mb-[25px]'>
                            <h1 className='relative w-[550px] flex text-8xl font-extrabold pb-[110px] mb-[30px]'>
                                <span className='mr-[20px]'>Мы</span>
                                <TextSlider
                                    textArray={MainTextSliderData}
                                    speed={2500}
                                    className={`absolute bottom-0 left-0 h-[115px]`}
                                />
                            </h1>
                            <h3 className='text-2xl'>
                                Твой партнер и творец цифровых миров!
                            </h3>
                        </div>
                    </div>
                    <div className='absolute top-[80px] right-[150px] max-w-[750px]'>
                        <img
                            className='relative z-[1000] img animate-animSmallMove '
                            src={philosopher}
                            alt=''
                        />
                        <span className='lightBall top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-[350px] h-[350px] bg-orangeMain animate-pulse'></span>
                    </div>
                </div>
            </div>
        </section>
    );
};
