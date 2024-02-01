import Article from '../../Article/Article';
import data from './articles.json'

const ArticleList = () => {
    return <div className='mt-5 grid gap-5 sm:mt-0 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl m-auto lg:max-w-[1000px]'>
        {
            data.map((props, index) => <Article key={index} {...props} />)
        }
    </div>
}

export default ArticleList;