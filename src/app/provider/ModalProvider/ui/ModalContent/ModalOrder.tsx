import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

export const ModalOrder = () => {
    return (
        <div>
            <h3 className='text-3xl font-extrabold max-w-[400px] mb-[20px]'>
                Оставьте заявку на разработку сайта
            </h3>
            <div className='flex flex-col gap-[10px]'>
                <Input
                    name='name'
                    type='text'
                    placeholder='Ваше имя'
                    boxClassName='max-w-[410px]'
                />
                <Input
                    name='name'
                    type='text'
                    placeholder='Контакт'
                    boxClassName='max-w-[410px]'
                />
                <Button black={true}>Заказать</Button>
            </div>
        </div>
    );
};
