import { whatWeDoData } from 'shared/data/lessonsData';
import { WhatWeDoImg } from 'shared/images';

export const LessonsPageWWD = () => {
    return (
        <section>
            <div className='container'>
                <h2 className='title text-center'>Чему мы научимся?</h2>
                <h4 className='smallTitle max-w-[800px] text-center mx-auto mb-[50px]'>
                    В этом курсе мы создадим несколько практических проектов,
                    которые помогут закрепить полученные знания:
                </h4>
                <div className='flex flex-col gap-[70px] mb-[30px]'>
                    <div className='relative max-w-[80%] mx-auto'>
                        <div className='relative z-20 w-[100%] p-[50px] bg-mainBg mx-auto max-h-[530px] rounded-stdRadius overflow-hidden'>
                            <img
                                className='img animate-whatWeDo rounded-[25px]'
                                src={WhatWeDoImg}
                                alt='Фото проекта'
                            />
                        </div>
                        <div className='bluredBall z-10 w-[200px] h-[200px] top-0 left-[-50px] bg-[rgba(255,255,255,.25)]'></div>
                        <div className='bluredBall z-10 w-[200px] h-[200px] bottom-0 right-[-50px] bg-[rgba(255,255,255,.25)]'></div>
                    </div>
                    <ul className='flex flex-wrap justify-center gap-[30px] mb-[30px]'>
                        {whatWeDoData.map((item, index) => (
                            <li key={index} className='max-w-[45%] w-full'>
                                <strong className='block text-mainBgInv mb-[15px] text-2xl w-fit rounded-standartRadius'>
                                    {item.title}
                                </strong>{' '}
                                {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className='smallTitle max-w-[90%] mx-auto'>
                    Эти проекты помогут вам не только применить теоретические
                    знания на практике, но и сформировать портфолио, которое
                    станет основой для дальнейшего развития в веб-разработке.
                </p>
            </div>
        </section>
    );
};
