import { FC } from 'react';
import { ProgrammItem } from 'shared/data/lessonsData';

interface CardProps {
    technology: ProgrammItem;
}

export const ProgTechnologyCard: FC<CardProps> = ({ technology }) => {
    return (
        <article className='mb-[20px] text-xl'>
            <h4
                className={`title mb-[40px] px-[35px] py-[5px] w-fit mx-auto rounded-stdRadius bg-mainBgInv text-mainBg`}
            >
                {technology.name}
            </h4>
            {technology.text && <p className='mb-[10px]'>{technology.text}</p>}
            <ul className='flex flex-col gap-[10px]'>
                {technology.description.map((item, index) => (
                    <li key={index} className='relative pb-[15px]'>
                        {index !== technology.description.length - 1 && (
                            <div
                                className='dotLine'
                                style={{ height: 'calc(100% - 6px)' }}
                            ></div>
                        )}
                        <div className='dot'></div>
                        <strong className=''>
                            {item.slice(0, item.indexOf(':') + 1)}
                        </strong>
                        {item.slice(item.indexOf(':') + 1)}
                    </li>
                ))}
            </ul>
        </article>
    );
};
