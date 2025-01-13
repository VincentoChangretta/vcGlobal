import { Logo } from 'widgets/Logo';

export const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='flex justify-between items-center py-[30px]'>
                    <Logo pathname='/' />
                    <a href=''>Политика конфиденцаильности</a>
                </div>
            </div>
        </footer>
    );
};
