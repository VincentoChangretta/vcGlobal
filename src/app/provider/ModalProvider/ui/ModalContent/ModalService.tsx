import { ModalServiceForm } from './ModalServiceForm';

export const ModalService = ({ modalData }) => {
    return (
        <article>
            <h2 className='text-3xl font-extrabold max-w-[700px] mb-[20px]'>
                {modalData.title}
            </h2>
            <p className='mb-[10px]'>{modalData.text}</p>
            <div className='flex items-center gap-[10px] mb-[20px]'>
                {modalData.checks.map((item) => {
                    const key = item + Math.random();
                    return (
                        <span
                            key={key}
                            className='text-xs px-4 py-2 bg-mainBg text-mainBgInv rounded-stdRadius'
                        >
                            {item}
                        </span>
                    );
                })}
            </div>
            <div className='mb-[20px]'>
                <p className='text-2xl font-extrabold'>{modalData.price}</p>
                <div className='time '>{modalData.time}</div>
            </div>
            <ModalServiceForm />
        </article>
    );
};
