

export const PricesTopArticle = ({card}) => {
  return (
    <article className="p-[20px] bg-mainBgInv text-mainBg w-full rounded-stdRadius">
      <div className="flex items-center justify-between">
        <div>
          <h4>{card.name}</h4>
          <h4>{card.descr}</h4>
        </div>
        <p>{card.price}</p>
      </div>
    </article>
  );
}
