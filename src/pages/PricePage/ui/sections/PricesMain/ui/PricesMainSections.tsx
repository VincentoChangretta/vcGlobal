import { FC } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { PriceMainArticle } from './PriceMainArticle';

export interface PricesMainSectionsProps {
    data: ServicePriceTypes[];
    title: string;
}

export const PricesMainSections: FC<PricesMainSectionsProps> = ({
    data,
    title,
}) => {
    const sectionId = data[0].id.replace(/-\d+/g, '');
    return (
        <section className='mb-[50px]' id={sectionId}>
            <h3 className='title text-center'>{title}</h3>
            <div className='flex flex-col gap-[50px] mx-auto'>
                {data.map((service) => (
                    <PriceMainArticle key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};
