export const PriceMainArticle = ({ service }) => {
    return (
        <article className='max-w-[1000px] py-[20px] px-[40px] rounded-stdRadius bg-glassWhite'>
            <div className='flex justify-between items-end'>
                <div>
                    <h4 className='text-sliderNums font-extrabold leading-sliderNums mb-[30px]'>
                        {service.title}
                    </h4>
                    <p>{service.text}</p>
                </div>
                <div className='text-right'>
                    <p className='text-sliderNums font-extrabold leading-sliderNums mb-[30px]'>
                        {service.price}
                    </p>
                    <p className='whitespace-nowrap'>{service.time}</p>
                </div>
            </div>
        </article>
    );
};
