import { useState } from 'react';
import { feedbacks } from 'shared/data/data';
import { Button } from 'shared/ui/Button';

export const Feedbacks = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  return (
    <div>
      <div className='grid grid-cols-2 gap-[27px] mb-[30px] w-980:grid-cols-1'>
        {feedbacks.slice(0, visibleCount).map((feedback) => (
          <article
            className='p-[20px] rounded-stdRadius bg-glassWhite transition-all cursor-pointer hover:bg-glassWhiteHover'
            key={feedback.id}
          >
            <h3 className='text-2xl mb-[20px]'>{feedback.client_name}</h3>
            <p>{feedback.feedback}</p>
          </article>
        ))}
      </div>
      {visibleCount == feedbacks.length ? (
        <Button className='btn mx-auto' onClick={() => setVisibleCount(4)}>
          Скрыть
        </Button>
      ) : (
        <Button
          className='btn mx-auto'
          onClick={() => setVisibleCount((prev) => prev + 4)}
        >
          Еще
        </Button>
      )}
    </div>
  );
};
