import { useEffect, useRef, useState } from 'react';
import { ListSliderContent } from './ListSliderContent';
import { ListSliderList } from './ListSliderList';
import { aboutServiceDataRU } from 'shared/data/data';

export const ListSlider = () => {
  const index = useRef(0);
  const serviceData = aboutServiceDataRU;
  const [activeEl, setActiveEl] = useState(serviceData[index.current]);
  const [animation, setAnimation] = useState({
    opacity: 1,
    translate: '0 0',
  });

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setAnimation({ opacity: 0.5, translate: '0 30px' });
      setTimeout(() => {
        index.current++;
        index.current == serviceData.length ? (index.current = 0) : null;
        setActiveEl(serviceData[index.current]);
        setAnimation({ opacity: 2, translate: '0 0px' });
      }, 500);
    }, 7000);
    return () => clearInterval(sliderInterval);
  }, [serviceData]);

  const handleChangeActive = (item) => {
    setAnimation({ opacity: 0.5, translate: '0 30px' });
    setTimeout(() => {
      setActiveEl(item);
      index.current = serviceData.findIndex((element) => element.id == item.id);
      setAnimation({ opacity: 1, translate: '0 0' });
    }, 500);
  };
  return (
    <div className='flex justify-between items-center w-1350:flex-col-reverse w-1350:flex-wrap w-1350:justify-center w-1350:gap-[30px]'>
      <ListSliderContent activeEl={activeEl} animation={animation} />
      <ListSliderList
        serviceData={serviceData}
        activeEl={activeEl}
        setActiveEl={setActiveEl}
        index={index}
        handleChangeActive={handleChangeActive}
        setAnimation={setAnimation}
      />
    </div>
  );
};
