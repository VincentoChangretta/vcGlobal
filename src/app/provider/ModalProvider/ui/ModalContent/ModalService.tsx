export const ModalService = ({ modalData }) => {
    return (
        <article>
            <h2>{modalData.title}</h2>
            <p>{modalData.text}</p>
            <div className='checks'>
                {modalData.checks.map((item) => {
                    const key = item + Math.random();
                    return (
                        <span key={key} className='check'>
                            {item}
                        </span>
                    );
                })}
            </div>
            <p className='price'>{modalData.price}</p>
            <div className='time'>{modalData.time}</div>
        </article>
    );
};
