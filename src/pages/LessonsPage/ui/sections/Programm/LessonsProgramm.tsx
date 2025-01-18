import { programmData } from 'shared/data/lessonsData';
import { ProgTechnologyCard } from './ProgTechnologyCard';

export const LessonsProgramm = () => {
    return (
        <div className='mx-auto'>
            {programmData.map((technology) => (
                <ProgTechnologyCard
                    key={technology.name}
                    technology={technology}
                />
            ))}
        </div>
    );
};
