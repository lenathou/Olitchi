export interface ScheduleSlot {
    day: string;
    location: string;
    hours: string;
    isOpen: boolean;
}

export const SCHEDULE: ScheduleSlot[] = [
    { day: 'Lundi', location: 'Les Ulis - Parc d\'Activités', hours: '11h30 - 14h30', isOpen: true },
    { day: 'Mardi', location: 'Évry - Courcouronnes', hours: '11h30 - 14h30', isOpen: true },
    { day: 'Mercredi', location: 'Fermé', hours: '-', isOpen: false },
    { day: 'Jeudi', location: 'Massy - Place du Grand Ouest', hours: '11h30 - 14h30', isOpen: true },
    { day: 'Vendredi', location: 'Les Ulis - Centre Ville', hours: '11h30 - 14h30', isOpen: true },
    { day: 'Samedi', location: 'Marché des Ulis', hours: '08h00 - 13h00', isOpen: true },
    { day: 'Dimanche', location: 'Fermé', hours: '-', isOpen: false },
];

export const TODAY_DATA = {
    date: new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }),
    dayName: 'Lundi',
    location: 'Les Ulis - Parc d\'Activités',
    address: 'Avenue des tropiques, 91940 Les Ulis',
    hours: '11h30 - 14h30',
    isOpen: true,
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
};
