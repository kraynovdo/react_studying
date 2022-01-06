export interface INewsItem {
    key: number;
    title: string;
    content: string;
}

const newsData: INewsItem[] = [
    {
        key: 1,
        title: 'First title',
        content: 'First content'
    },
    {
        key: 2,
        title: 'Second title',
        content: 'Second content'
    },
    {
        key: 3,
        title: 'Third title',
        content: 'Third content'
    },
]

export const getNews = (): INewsItem[] => {
    return newsData;
}