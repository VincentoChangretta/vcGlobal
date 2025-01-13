import { FC } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { Button } from 'shared/ui/Button';
interface PriceMainArticleProps {
    service: ServicePriceTypes;
}

export const PriceMainArticle: FC<PriceMainArticleProps> = ({ service }) => {
    return (
        <article className='py-[20px] px-[40px] rounded-stdRadius bg-glassWhite'>
            <div className='flex justify-between items-end mb-[20px]'>
                <div>
                    <h4 className='text-sliderNums font-extrabold leading-sliderNums mb-[30px]'>
                        {service.title}
                    </h4>
                    <p>{service.text}</p>
                </div>
                <div className='text-right'>
                    <p className='text-sliderNums font-extrabold leading-sliderNums mb-[30px]'>
                        {service.price}
                    </p>
                    <p className='whitespace-nowrap'>{service.time}</p>
                </div>
            </div>
            <div className='flex justify-between items-end'>
                <ul className='flex items-center gap-[20px]'>
                    {service.checks.map((item, index) => (
                        <li
                            className='py-[10px] px-[20px] bg-glassWhite rounded-stdRadius'
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <Button>Заказать</Button>
            </div>
        </article>
    );
};
