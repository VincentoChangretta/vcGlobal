import {
    appsPriceCardsData,
    gamesPriceCardsData,
    reworkPriceCardsData,
    websitesPriceCardsData,
} from 'shared/data/data';
import { PricesMainSections } from './ui/PricesMainSections';
import { Modal, useModal } from 'app/provider/ModalProvider';
import { data } from 'react-router-dom';

const PricePageData = [
    {
        data: appsPriceCardsData,
        title: 'Сайты',
    },
    {
        data: gamesPriceCardsData,
        title: 'Приложения',
    },
    {
        data: reworkPriceCardsData,
        title: 'Игры',
    },
    {
        data: websitesPriceCardsData,
        title: 'Доработка',
    },
];

export const PricesMain = () => {
    const { isOpen, openModal, closeModal } = useModal();
    return (
        <section className='mb-section'>
            <div className='container'>
                <Modal isOpen={isOpen} onClose={closeModal}>
                    1
                </Modal>
                {PricePageData.map((item) => (
                    <PricesMainSections
                        key={item.title}
                        title={item.title}
                        data={item.data}
                    />
                ))}
            </div>
        </section>
    );
};
