import { Calendar } from 'lucide-react';
import { SCHEDULE } from '@/data/schedule';

export function LocalisationSchedule() {
    const currentDayIndex = new Date().getDay();
    const scheduleIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1;

    return (
        <section id="schedule" className="px-4 mb-20 md:mb-24">
            <div className="container mx-auto max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">Planning de la semaine</h2>
                    <div className="h-1 w-16 bg-primary/30 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-3">
                    {SCHEDULE.map((slot, index) => {
                        const isCurrentDay = index === scheduleIndex;

                        return (
                            <div
                                key={slot.day}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl transition-all duration-300 ${isCurrentDay ? 'bg-primary/10 border border-primary/20 shadow-sm transform scale-[1.02]' : 'bg-transparent border border-transparent hover:bg-secondary/30'}`}
                            >
                                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isCurrentDay ? 'bg-primary text-white' : 'bg-muted/50 text-muted-foreground'}`}>
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className={`block font-bold text-lg ${isCurrentDay ? 'text-primary' : 'text-foreground'}`}>
                                            {slot.day}
                                        </span>
                                        <span className={`text-sm ${isCurrentDay ? 'text-primary/80' : 'text-muted-foreground'}`}>
                                            {slot.isOpen ? 'Ouvert' : 'Fermé'}
                                        </span>
                                    </div>
                                </div>

                                <div className="pl-14 sm:pl-0 text-right sm:text-right">
                                    {slot.isOpen ? (
                                        <>
                                            <div className="font-medium text-foreground">{slot.location}</div>
                                            <div className="text-sm text-muted-foreground font-mono">{slot.hours}</div>
                                        </>
                                    ) : (
                                        <div className="text-muted-foreground italic text-sm">Repos</div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
