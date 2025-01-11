import { PricesTopArticle } from "./PricesTopArticle";


export const PricesTop = () => {

    interface popularServicesTypes{
        id: number,
        name: string,
        descr: string,
        price: string
    }


    const popularServices: popularServicesTypes[] = [
        {
            id: 1,
            name: "Site 1",
            descr: "Description",
            price: "100$"
        },
        {
            id: 2,
            name: "Site 2",
            descr: "Description",
            price: "100$"
        },
        {
            id: 2,
            name: "Site 3",
            descr: "Description",
            price: "100$"
        },
    ]

  return (
    <section className="">
        <div className="container">
            <div className="flex items-center justify-between minusHeaderHeight">
                <div>
                    <h1 className="bigTitle">
                        Наши сайты - инвестиция успех!
                    </h1>
                    <h3 className="max-w-[900px] title">
                    Профессиональные решения для вашего бизнеса
                    </h3>
                </div>
                <div className="max-w-[550px] w-full flex flex-col gap-[10px] ">
                    {popularServices.map(card => (
                        <PricesTopArticle key={card.id} card={card}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
