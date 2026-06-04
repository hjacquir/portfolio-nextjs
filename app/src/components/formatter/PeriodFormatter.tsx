export function PeriodFormatter({startDate, endDate}: { startDate: Date, endDate: Date | null }) {
    let options = {
        year: "numeric",
        month: "long",
    };
    const startDateAsString = startDate.toLocaleDateString("fr-FR", options);

    const endDateAsString = endDate ? endDate.toLocaleDateString("fr-FR", options) : "Aujourd'hui"

    return `${startDateAsString} - ${endDateAsString}`
}