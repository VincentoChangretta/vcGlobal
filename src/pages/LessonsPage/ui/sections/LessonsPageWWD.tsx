import { whatWeDoData } from 'shared/data/lessonsData';

export const LessonsPageWWD = () => {
  return (
    <section className='mb-section' id='learn'>
      <div className='lessons-container'>
        <div className='mb-[80px] w-850:mb-[40px]'>
          <h2 className='title text-center'>Чему мы научимся?</h2>
          <h4 className='smallTitle max-w-[800px] text-center mx-auto'>
            В этом курсе мы создадим несколько практических проектов, которые
            помогут закрепить полученные знания:
          </h4>
        </div>
        <div className='flex flex-col gap-[70px]'>
          <ul className='wwd-container grid grid-cols-2 gap-[30px] mb-[80px] w-1300:text-center'>
            {whatWeDoData.map((item, index) => (
              <li key={index} className='w-full'>
                <strong className='block text-mainBgInv mb-[15px] text-2xl w-fit rounded-standartRadius w-1300:mx-auto'>
                  — {item.title}
                </strong>{' '}
                {item.description}
              </li>
            ))}
          </ul>
        </div>
        <p className='smallTitle text-pretty w-1300:text-center'>
          Эти проекты помогут вам не только применить теоретические знания на
          практике, но и сформировать портфолио, которое станет основой для
          дальнейшего развития в веб-разработке.
        </p>
      </div>
    </section>
  );
};
