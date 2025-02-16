import { Logo } from 'widgets/Logo';

export const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='flex justify-between items-center py-[30px] w-550:flex-col w-550:items-center w-550:gap-3'>
          <Logo pathname='/' />
          <a href=''>Политика конфиденцаильности</a>
        </div>
      </div>
    </footer>
  );
};
