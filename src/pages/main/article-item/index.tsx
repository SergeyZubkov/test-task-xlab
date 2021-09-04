import { Article } from "../../../types";
import './style.scss';

interface ArticleItemProps {
    article: Article
}

const ArticleItem = (props: ArticleItemProps) => {
    const { title, paragraphs } = props.article;

    return (
        <div className="article-item">
            <h3 className="article-item__title">
                {title}
            </h3>
            {paragraphs.map(
                (text, index) => <p key={index}>{text}</p>
            )}
        </div>
    )
}

export default ArticleItem;