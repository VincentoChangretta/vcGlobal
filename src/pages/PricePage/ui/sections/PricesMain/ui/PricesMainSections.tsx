import { FC, useState } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { PriceMainArticle } from './PriceMainArticle';
import { Modal, useModal } from 'app/provider/ModalProvider';

export interface PricesMainSectionsProps {
    data: ServicePriceTypes[];
    title: string;
}

export const PricesMainSections: FC<PricesMainSectionsProps> = ({
    data,
    title,
}) => {


    return (
        <section className='mb-[50px]'>
            <h3 className='title text-center'>{title}</h3>
            <div className='flex flex-col gap-[50px] mx-auto'>
                {data.map((service) => (
                    <PriceMainArticle key={service.id} service={service} />
                ))}

            </div>
        </section>
    );
};
