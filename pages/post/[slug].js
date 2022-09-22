import ArticleEdit from '../../components/ArticleEdit'
import ReadersNav from '../../components/readersNav'
import Recommendations from '../../components/Recommendations'


const slug = () => {
    return (
        <div className='flex justify-between'>
            <ReadersNav />
            <ArticleEdit />
            <Recommendations />
        </div>
    )
}

export default slug