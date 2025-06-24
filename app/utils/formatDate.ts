export const formatDate = (date: Date | number, locale?: string): string => {
    return new Intl.DateTimeFormat(locale, { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date)
}
