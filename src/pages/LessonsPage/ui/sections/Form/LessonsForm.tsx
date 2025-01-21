import {
    faCss3,
    faGithub,
    faHtml5,
    faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { placeholders } from 'shared/constants/constants';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

export const LessonsForm = () => {
    return (
        <form className='relative'>
            <div>
                <h2 className='smallTitle mb-[30px]'>
                    Запись на курс
                    <div className='text-5xl mt-2'>Frontend/Start</div>
                </h2>
                <h3 className='mb-[20px]'>Заполните форму</h3>
            </div>
            <div className='flex gap-[30px]'>
                <div className='flex flex-col max-w-[400px] w-full gap-[10px] mb-[20px]'>
                    <Input
                        name='lessons-name'
                        type='text'
                        placeholder={placeholders.NAME}
                    />
                    <Input
                        name='lessons-contact-with'
                        type='text'
                        placeholder={placeholders.YC}
                    />
                    <Button black={true}>Записаться!</Button>
                </div>
                <div className='flex flex-col text-[120px]'>
                    <div className='absolute top-[-10px] right-[65px] rotate-12 text-[130px]'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='absolute top-[80px] right-[-70px] -rotate-12'>
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                    <div className='absolute top-[175px] right-[60px] -rotate-6'>
                        <FontAwesomeIcon icon={faJsSquare} />
                    </div>
                    <div className='absolute bottom-[-30px] right-[-60px] rotate-12'>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
            </div>
        </form>
    );
};
