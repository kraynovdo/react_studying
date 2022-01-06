import {getNews, INewsItem} from '../data/News'; 



const NewsItem = (props: INewsItem) => (
    <div>
        <h3>{props.title}</h3>
        <span>{props.content}</span>
    </div>
)

const Lists = () => {
    let news = getNews();
    return (
        <div className="news">
            <h1>News</h1>

            {news.map(item => (
                <NewsItem key={item.key} title={item.title} content={item.content}/>
            ))}
        </div>
    )
}

export { Lists }