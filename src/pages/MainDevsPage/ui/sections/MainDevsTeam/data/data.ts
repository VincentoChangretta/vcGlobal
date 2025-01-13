import { AlisaTeam, AramTeam, VitoTeam } from 'shared/images';

interface teamPerson {
    name: string;
    job: string;
    img: string;
}

export const teamPersons: teamPerson[] = [
    {
        name: 'Aram Papikyan',
        job: 'Frontend developer',
        img: AramTeam,
    },
    {
        name: 'Alisa Fedotova',
        job: 'UI/UX designer',
        img: AlisaTeam,
    },
    {
        name: 'Vincento Changretta',
        job: 'Fullstack developer',
        img: VitoTeam,
    },
];
