import { AramTeam } from 'shared/images';

export const LessonsPageExpert = () => {
    return (
        <section className='mb-section'>
            <div className='lessons-container'>
                <div className='flex items-center justify-center gap-[50px]'>
                    <div className='max-w-[750px]'>
                        <h2 className='title text-left'>Ваш преподаватель</h2>
                        <h4 className='smallTitle text-primaryColorInv mb-[50px]'>
                            Арам Арсенович <br />
                            Frontend React разработчик
                        </h4>
                        <p className='text-xl'>
                            Здравствуйте! Я преподаватель фронтенд-разработки с
                            богатым опытом в HTML, CSS и JavaScript. Моя цель —
                            вдохновить студентов на создание красивых и
                            функциональных веб-приложений. Я использую
                            практический подход к обучению, сочетая теорию с
                            реальными проектами, чтобы помочь учащимся развить
                            навыки, необходимые для успешной карьеры в области
                            веб-разработки. Я верю, что каждый может стать
                            отличным разработчиком, и с радостью делюсь своими
                            знаниями и опытом, чтобы поддержать вас на этом
                            пути.
                        </p>
                    </div>
                    <div className='relative max-w-[500px]'>
                        <img
                            className='relative z-20 img min-h-[600px] rounded-stdRadius'
                            src={AramTeam}
                            alt='Фото эксперта'
                        />
                        <div className='absolute inset-0 z-10 bg-[rgba(0,0,0,.4)] rounded-stdRadius'></div>
                        <div className='bluredBall w-[400px] h-[400px] top-2/4 right-[60px] -translate-y-2/4 bg-bluredBall'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
