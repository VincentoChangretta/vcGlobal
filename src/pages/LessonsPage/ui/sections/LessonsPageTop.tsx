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
        <section className='relative  minusHeaderHeight'>
            <div className='container'>
                <div className='minusHeaderHeight flex items-center justify-between'>
                    <div>
                        <div className='mb-[30px]'>
                            <div className='relative z-10 mb-[30px]'>
                                <h1 className='text-[60px] font-extrabold text-mainBgInv leading-[85px]'>
                                    <span>
                                        Твой путь к веб-успеху <br /> начинается
                                        с
                                    </span>
                                    <span className='ml-[25px] px-[35px]  bg-mainBgInv text-mainBg rounded-[50px]'>
                                        vcLessons!
                                    </span>
                                </h1>
                            </div>
                            <h3 className='max-w-[850px] text-xl text-pretty'>
                                Мы предлагаем увлекательные и доступные уроки по
                                HTML, CSS, JavaScript и Git, которые помогут
                                тебе освоить основы и создавать первые сайты.{' '}
                                <br /> Присоединяйся к нам и открой для себя
                                безграничные возможности веб-технологий!
                            </h3>
                        </div>
                        <Button onClick={() => setModal()}>Записаться</Button>
                    </div>
                    <div className='relative max-w-[35%] h-[50px] w-full flex flex-col justify-center text-[230px]'>
                        <div
                            className={
                                'absolute top-[-280px] right-[230px] -rotate-3 techIconBox items-center htmlIcon animate-bounceOne text-[250px]'
                            }
                        >
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div
                            className={
                                'absolute top-[-90px] right-0 rotate-6 techIconBox items-center cssIcon animate-bounceTwo'
                            }
                        >
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div
                            className={
                                'absolute top-[-50px] right-[400px] -rotate-6 techIconBox jsIcon animate-bounceThree text-[230px]'
                            }
                        >
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div
                            className={
                                'absolute top-[130px] right-[170px] rotate-6 techIconBox gitIconLight animate-bounceFor text-[230px]'
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
