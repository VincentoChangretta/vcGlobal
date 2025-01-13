import React from 'react';
// import './ListSliderList.css'

export const ListSliderList = ({
    serviceData,
    activeEl,
    setActiveEl,
    index,
    handleChangeActive,
    setAnimation,
}) => {
    const handleOperation = (boolean, data) => {
        if (boolean) {
            index.current =
                index.current == serviceData.length - 1
                    ? 0
                    : (index.current += 1);
        } else {
            index.current =
                index.current == 0
                    ? serviceData.length - 1
                    : (index.current -= 1);
        }
        setAnimation({ opacity: 0.5, translate: '0 30px' });
        setTimeout(() => {
            setActiveEl(data[index.current]);
            setAnimation({ opacity: 1, translate: '0 0' });
        }, 500);
    };
    return (
        <ul className=' flex flex-col gap-[40px] relative py-[40px] text-sliderNums'>
            <li
                className='cursor-pointer arrow'
                onClick={() => handleOperation(true, serviceData)}
            >
                &#10095;
            </li>
            {serviceData.map((item, index) => (
                <li
                    key={item.id}
                    onClick={() => handleChangeActive(item)}
                    className={`${activeEl.id == item.id ? 'opacity-1' : 'opacity-[0.2]'} cursor-pointer`}
                >
                    0{index + 1}
                </li>
            ))}
            <li
                className='cursor-pointer mirroredArrow arrow'
                onClick={() => handleOperation(false, serviceData)}
            >
                &#10095;
            </li>
        </ul>
    );
};
