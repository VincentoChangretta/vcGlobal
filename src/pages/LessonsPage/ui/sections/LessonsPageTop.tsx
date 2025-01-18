import {
    faCss3,
    faGithub,
    faHtml5,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LessonsPageTop = () => {
    return (
        <section className='relative  minusHeaderHeight'>
            <div className='lessons-container'>
                <div className='pt-[120px]'>
                    <div className='mb-[60px]'>
                        <div className='relative z-10 text-center mb-[30px]'>
                            <h1 className=' text-6xl font-extrabold text-mainBgInv leading-[90px]'>
                                <span>
                                    Твой путь к веб-успеху <br /> начинается с
                                </span>
                                <span className='ml-[5px] text-7xl px-[35px] py-[7px] bg-mainBg text-mainBgInv rounded-[50px]'>
                                    vcLessons!
                                </span>
                            </h1>
                        </div>
                        <h3 className='max-w-[850px] mx-auto text-center'>
                            Мы предлагаем увлекательные и доступные уроки по
                            HTML, CSS, JavaScript и Git, которые помогут тебе
                            освоить основы и создавать первые сайты. <br />{' '}
                            Присоединяйся к нам и открой для себя безграничные
                            возможности веб-технологий!
                        </h3>
                    </div>
                    <div className='flex justify-center gap-[100px] text-[200px]'>
                        <div className={'htmlIcon animate-bounceOne'}>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className={'cssIcon animate-bounceTwo'}>
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className={'jsIcon animate-bounceThree'}>
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className={'gitIconLight animate-bounceFor'}>
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
