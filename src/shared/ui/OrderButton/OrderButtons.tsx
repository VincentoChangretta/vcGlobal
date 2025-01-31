import { Links } from 'shared/data/data';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const OrderButtons = () => {
    return (
        <div className='flex justify-center items-center gap-[30px]'>
            <Link to={Links.TG} className='linkButton' target='_blank'>
                <Button className='bg-orangeMain'>Консультация</Button>
            </Link>
            <Button className='bg-orangeMain'>Заказать сайт</Button>
        </div>
    );
};
