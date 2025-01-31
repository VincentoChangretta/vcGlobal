import './ListSliderContent.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

export const ListSliderContent = ({ activeEl, animation }) => {
    let activeElClass = ['about-info__card-img'];
    if (activeEl.id == 'sites') {
        activeElClass.push('sites');
    } else if (activeEl.id == 'apps') {
        activeElClass.push('apps');
    } else if (activeEl.id == 'games') {
        activeElClass.push('games');
    }

    return (
        <div
            className='relative flex items-center justify-center gap-[100px] transition-all'
            style={animation}
        >
            <div className={`${activeElClass.join(' ')} w-[580px] h-[670px]`}>
                <img className='img' src={activeEl.img} alt={activeEl.imgAlt} />
            </div>
            <div className='max-w-[600px]'>
                <h3 className='title text-left'>
                    {activeEl.title}
                </h3>
                <h4 className='text-[30px] font-bold mb-[20px]'>
                    — {activeEl.description}
                </h4>
                <p className='mb-[20px]'>{activeEl.text}</p>
                <Link to={activeEl.link}>
                    <Button className='bg-orangeMain text-mainBgInv'>
                        Подробнее
                    </Button>
                </Link>
            </div>
        </div>
    );
};
