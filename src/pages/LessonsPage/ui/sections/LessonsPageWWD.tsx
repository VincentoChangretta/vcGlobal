import { whatWeDoData } from 'shared/data/lessonsData';

export const LessonsPageWWD = () => {
    return (
        <section className='mb-section' id='learn'>
            <div className='lessons-container'>
                <div className='mb-[80px]'>
                    <h2 className='title text-center'>Чему мы научимся?</h2>
                    <h4 className='smallTitle max-w-[800px] text-center mx-auto'>
                        В этом курсе мы создадим несколько практических
                        проектов, которые помогут закрепить полученные знания:
                    </h4>
                </div>
                <div className='flex flex-col gap-[70px]'>
                    <ul className='flex flex-wrap justify-start gap-[30px] mb-[80px]'>
                        {whatWeDoData.map((item, index) => (
                            <li key={index} className='max-w-[48%] w-full'>
                                <strong className='block text-mainBgInv mb-[15px] text-2xl w-fit rounded-standartRadius'>
                                    — {item.title}
                                </strong>{' '}
                                {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className='smallTitle text-pretty'>
                    Эти проекты помогут вам не только применить теоретические
                    знания на практике, но и сформировать портфолио, которое
                    станет основой для дальнейшего развития в веб-разработке.
                </p>
            </div>
        </section>
    );
};
