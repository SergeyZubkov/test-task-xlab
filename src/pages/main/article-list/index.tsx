import List from '../../../components/list';
import ArticleItem from '../article-item';
import { Article } from '../../../types';
import './style.scss';



interface ArticleListProps {
    articles: Article[]
}

const ArticleList = (props: ArticleListProps) => {
    const { articles } = props
    return (
        <List
            <Article>
            data={articles}
            renderItem={(article) => <ArticleItem key={article.id} article={article} />}
        />
    )
}

export default ArticleList;