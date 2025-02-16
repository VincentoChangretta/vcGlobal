import { Feedbacks } from './Feedbacks';

export const MainDevsFeedbacks = () => {
  return (
    <section className='mb-section' id='feedbacks'>
      <div className='container'>
        <h2 className='bigTitle text-center'>Отзывы</h2>
        <div className='mx-auto max-w-[80%] mb-[50px] w-1450:max-w-full'>
          <div className='mb-[40px] text-center'>
            <h3 className='text-title mb-[20px]'>Никитин Матвей Алексеевич</h3>
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
            className='rounded-stdRadius w-full h-[720px] w-1450:h-[550px] w-1450:max-w-[80%] w-1450:mx-auto w-1040:h-[450px] w-1040:max-w-[70%] w-750:max-w-full w-550:h-[300px]'
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
