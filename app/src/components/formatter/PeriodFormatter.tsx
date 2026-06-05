export function PeriodFormatter({startDate, endDate}: { startDate: Date, endDate?: Date }) {
    const startDateAsString = startDate.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
    });

    const endDateAsString = endDate ? endDate.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
    }) : "Aujourd'hui"

    return `${startDateAsString} - ${endDateAsString}`
}