import { advatnagesDataRU } from 'shared/data/data';

export const MainDevsAdvantages = () => {
  const data = advatnagesDataRU;
  return (
    <section className='mb-section'>
      <div className='container'>
        <h2 className='bigTitle text-center'>Наши преимущества</h2>
        <div className='flex justify-between gap-[20px] text-balance w-1140:flex-col w-1140:text-center w-1140:items-center'>
          {data.map((item) => (
            <div
              key={item.id}
              className='p-[20px] max-w-[500px] w-1140:p-[10px] w-1140:max-w-[700px]'
            >
              <p className='mb-[10px]'>0{item.id}</p>
              <h3 className='text-big font-bold mb-[30px] w-1140:mb-[10px]'>
                {item.title}
              </h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
