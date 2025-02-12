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
      className='relative flex items-center justify-center gap-[100px] transition-all w-1350:gap-[20px] w-1100:flex-col-reverse w-1100:gap-0'
      style={animation}
    >
      <div
        className={`${activeElClass.join(' ')} w-[580px] h-[670px] w-1200:w-[480px] w-1200:h-[570px] w-550:w-[280px] w-550:h-[370px]`}
      >
        <img className='img' src={activeEl.img} alt={activeEl.imgAlt} />
      </div>
      <div className='max-w-[600px] w-1100:text-center'>
        <h3 className='title text-left text-pretty w-1100:text-center w-450:max-w-[300px] w-450:mx-auto'>
          {activeEl.title}
        </h3>
        <h4 className='text-[30px] font-bold mb-[20px] w-550:text-2xl w-450:text-xl'>
          — {activeEl.description}
        </h4>
        <p className='mb-[20px] w-450:max-w-[300px] w-450:mx-auto'>
          {activeEl.text}
        </p>
        <Link to={activeEl.link}>
          <Button className='w-1100:mx-auto'>Подробнее</Button>
        </Link>
      </div>
    </div>
  );
};
