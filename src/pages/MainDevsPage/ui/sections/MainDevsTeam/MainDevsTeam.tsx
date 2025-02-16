import { teamPersons } from './data/data';
import { OrderButtons } from 'shared/ui/OrderButton/OrderButtons';

export const MainDevsTeam = () => {
  return (
    <section className='mb-section'>
      <div className='container'>
        <div className='text-center mb-[50px]'>
          <h2 className='bigTitle'>Наша команда</h2>
          <h3 className='text-big max-w-[800px] mx-auto'>
            Правильная команда — залог успеха: мы вдохновляем друг друга,
            достигаем большего и воплощаем мечты в реальность.
          </h3>
        </div>
        <div className='flex justify-center gap-[40px] mb-[50px] w-980:flex-wrap w-980:justify-center w-980:items-center w-980:gap-[20px]'>
          {teamPersons.map((person, index) => (
            <article
              key={person.name}
              className={`text-center ${index === 1 ? 'mt-[40px] w-980:mt-0' : ''}`}
            >
              <div className='w-[450px] h-[580px] mb-[20px] w-1450:w-[350px] w-1450:h-[480px] w-1160:w-[280px] w-1160:h-[410px]'>
                <img
                  className='img rounded-stdRadius'
                  src={person.img}
                  alt={person.name}
                />
              </div>
              <h3 className='text-big font-extrabold'>{person.name}</h3>
              <p>{person.job}</p>
            </article>
          ))}
        </div>
        <OrderButtons />
      </div>
    </section>
  );
};
