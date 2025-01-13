import { Feedbacks } from './Feedbacks';

export const MainDevsFeedbacks = () => {
    return (
        <section className='mb-section'>
            <div className='container'>
                <h2 className='bigTitle text-center'>Отзывы</h2>
                <div className='mx-auto max-w-[80%] mb-[50px]'>
                    <div className='mb-[40px] text-center'>
                        <h3 className='text-title mb-[20px]'>
                            Никитин Матвей Алексеевич
                        </h3>
                        <h4 className='text-big mb-[20px]'>
                            Блогер-просветитель <br />
                            Автор тгк
                            <a
                                className='link ml-[10px]'
                                href='https://t.me/starpear1724'
                                target='blank'
                            >
                                4я книга науки логики
                            </a>
                        </h4>
                        <p className='text-big'>
                            Отзыв на сайт{' '}
                            <a className='link' href='www.starpear.ru'>
                                www.starpear.ru
                            </a>
                        </p>
                    </div>
                    <iframe
                        className='rounded-stdRadius'
                        width='100%'
                        height='720'
                        src='https://www.youtube.com/embed/k-H6gnLXJHM?rel=0&si=4uHadabtxhhHhvUK'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    ></iframe>
                </div>
                <Feedbacks />
            </div>
        </section>
    );
};
