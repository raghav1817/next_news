import styles from '../../styles/Feed.module.css';
import { Toolbar } from '../components/toolbar';
import {useRouter} from 'next/router';
export const Feed = ({pageNum, articles}) => {
   // console.log(articles, pageNum)
   const router = useRouter();
    return(
    <div className='page-container'>
    <Toolbar></Toolbar>
        <div className="styles.main">
        {articles.map((article, index) => (
            <div key= {index} className={styles.post}>
                <h1 onClick={()=> (window.location.href= article.url)}>{article.title}</h1>
                <p>{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage}/>}
            </div>
        ))}
    </div>
    <div className={styles.paginator}>
        <div onClick={()=> {
            if (pageNum >1){
                router.push(`/feed/${pageNum-1}`).then(()=>window.scrollTo(0,0));
            }
        }}
        className={pageNum ===1 ? styles.disabled : styles.active}>Previous page</div>
     <div>#{pageNum}</div>
     <div onClick={()=> {
            if (pageNum < 5){
                router.push(`/feed/${pageNum + 1}`).then(()=>window.scrollTo(0,0));
            }
        }}
        className={pageNum === 5 ? styles.disabled : styles.active}>Next page</div>
    </div>
   </div>
    
    );
};
export const getServerSideProps= async pageContext => {
        const pageNum= pageContext.query.pop;
        if (!pageNum || pageNum <1 || pageNum > 5){
            return {
                props:{
                    articles: [], pageNum:1,
                }
            }
        }
       const apiResponse= await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=5&page=${pageNum}`,
        {
            headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,},
        },
       );
       const apiJson = await apiResponse.json(); 
    const {articles} = apiJson;

        return {
            props: { articles, pageNum : Number.parseInt(pageNum)}
        }
};
export default Feed;