export function formatPeriod(startDate: Date, endDate: Date | null): string {
    let options = {
        month: 'short',
        year: 'numeric',
    };

    const startDateAsString = startDate.toLocaleDateString('fr-FR', options);

    const endDateAsString = endDate ? endDate.toLocaleDateString('fr-FR', options) : "Aujourd'hui"

    return `${startDateAsString} - ${endDateAsString}`;
}