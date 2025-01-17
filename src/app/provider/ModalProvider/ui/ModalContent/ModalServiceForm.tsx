import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

export const ModalServiceForm = () => {
    return (
        <form>
            <div className='flex gap-[10px] items-start mb-[10px]'>
                <Input
                    name='name'
                    type='text'
                    placeholder='Ваше имя'
                    boxClassName='max-w-[400px]'
                    black={true}
                />
                <Input
                    name='contact-with-me'
                    type='text'
                    placeholder='Контакт'
                    boxClassName='max-w-[400px]'
                    black={true}
                />
            </div>
            <Button black={true}>Заказать</Button>
        </form>
    );
};
