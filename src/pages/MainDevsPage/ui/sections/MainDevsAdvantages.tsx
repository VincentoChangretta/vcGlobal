import { advatnagesDataRU } from "shared/data/data";

export const MainDevsAdvantages = () => {
  const data = advatnagesDataRU;
  return (
    <section className="mb-section">
      <div className="container">
        <h2 className="bigTitle text-center">Наши преимущества</h2>
        <div className="flex justify-between gap-[20px]">
          {data.map((item) => (
            <div key={item.id} className="p-[20px] max-w-[500px]">
              <p className="mb-[10px]">0{item.id}</p>
              <h3 className="text-big font-bold mb-[30px]">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
