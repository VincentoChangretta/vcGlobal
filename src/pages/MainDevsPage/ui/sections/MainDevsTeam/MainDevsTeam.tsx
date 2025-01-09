import { AlisaTeam, AramTeam, VitoTeam } from "shared/images";
import { teamPersons } from "./data/data";
import { OrderButtons } from "shared/ui/OrderButton/OrderButtons";


export const MainDevsTeam = () => {
  return (
    <section className="mb-section">
        <div className="container">
            <div className="text-center mb-[50px]">
                <h2 className='bigTitle'>Наша команда</h2>
                <h3 className='text-big max-w-[800px] mx-auto'>
                    Правильная команда — залог успеха: мы вдохновляем друг друга, достигаем большего и воплощаем мечты в реальность.           
                 </h3>
            </div>
                <div className="flex justify-center gap-[40px] mb-[50px]">
                    {
                        teamPersons.map((person, index) => (
                            <article className={`text-center ${index === 1 ? "mt-[40px]" : ""}`}>
                                <div className='w-[450px] h-[580px] mb-[20px]'>
                                    <img className="img rounded-stdRadius" src={person.img} alt={person.name} />
                                </div>
                                <h3>{person.name}</h3>
                                <p>{person.job}</p>
                            </article>
                        ))
                    }
                </div>
                <OrderButtons/>
        </div>
    </section>
  );
}
