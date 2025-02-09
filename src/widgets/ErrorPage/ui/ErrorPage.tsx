import { Button } from 'shared/ui/Button';

export const ErrorPage = () => {
    return (
        <section className='fixed inset-0 z-[9999] bg-mainBg text-mainBgInv flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <h2 className='text-5xl font-extrabold mb-[30px]'>
                    Что-то пошло не так :(
                </h2>
                <Button onClick={() => window.location.reload()}>
                    Перезагрузить
                </Button>
            </div>
        </section>
    );
};
