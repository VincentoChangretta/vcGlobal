import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalContext, useModal } from 'app/provider/ModalProvider';
import { useContext } from 'react';
import { modalDataVariations } from 'shared/constants/constants';
import { Button } from 'shared/ui/Button';

export const LessonsPageTop = () => {
  const { openModal } = useModal();
  const { setModalData } = useContext(ModalContext);

  const setModal = () => {
    setModalData(modalDataVariations.LESSONS_FORM);
    openModal();
  };

  return (
    <section className='relative minusHeaderHeight overflow-x-hidden'>
      <div className='container'>
        <div className='minusHeaderHeight flex items-center justify-between w-1550:pt-[150px] w-1550:flex-col w-1550:gap-[150px] w-1550:mb-[150px] w-1200:pt-[50px] w-1000:justify-start w-1000:gap-[150px] w-1000:mb-[100px] w-450:mb-[50px]'>
          <div>
            <div className='mb-[30px] w-1550:text-center'>
              <div className='relative z-10 mb-[30px]'>
                <h1 className='text-[60px] font-extrabold text-mainBgInv leading-[85px] w-1200:text-[40px] w-1200:leading-[60px] w-680:text-[30px] w-680:leading-[50px]'>
                  <span>
                    Твой путь к веб-успеху <br /> начинается с
                  </span>
                  <span className='ml-[25px] px-[35px]  bg-mainBgInv text-mainBg rounded-[50px] w-550:block'>
                    vcLessons!
                  </span>
                </h1>
              </div>
              <h3 className='max-w-[850px] text-xl text-balance w-680:max-w-[400px] w-680:text-base w-680:mx-auto'>
                Мы предлагаем увлекательные и доступные уроки по HTML, CSS,
                JavaScript и Git, которые помогут тебе освоить основы и
                создавать первые сайты. Присоединяйся к нам и открой для себя
                безграничные возможности веб-технологий!
              </h3>
            </div>
            <Button className='w-1550:mx-auto' onClick={() => setModal()}>
              Записаться
            </Button>
          </div>
          <div className='relative shrink-0 w-[560px] h-[450px] flex flex-col justify-center text-[230px] w-1550:ml-[60px] w-1000:text-[150px] w-1000:w-[360px] w-1000:h-[250px] w-450:w-[280px] w-450:ml-0'>
            <div
              className={
                'absolute top-[-100px] right-[230px] -rotate-3 techIconBox items-center htmlIcon animate-bounceOne text-[250px] w-1000:text-[160px] w-1000:right-[150px] w-450:text-[120px] w-450:right-[100px] w-450:top-[-90px]'
              }
            >
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div
              className={
                'absolute top-[60px] right-0 rotate-6 techIconBox items-center cssIcon animate-bounceTwo w-1000:text-[150px] w-450:text-[100px] w-450:top-[30px]'
              }
            >
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div
              className={
                'absolute top-[120px] right-[400px] -rotate-6 techIconBox jsIcon animate-bounceThree text-[230px] w-1000:text-[150px] w-1000:right-[280px] w-1000:top-[40px] w-450:text-[100px] w-450:top-[20px] w-450:right-[200px]'
              }
            >
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div
              className={
                'absolute top-[300px] right-[170px] rotate-6 techIconBox gitIconLight animate-bounceFor text-[230px] w-1000:text-[150px] w-1000:top-[180px] w-1000:right-[140px] w-450:text-[100px] w-450:right-[100px] w-450:top-[130px]'
              }
            >
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
