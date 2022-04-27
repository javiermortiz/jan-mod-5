import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
  const { id } = useParams();
  //!!START SILENT
  const singleArticle = articles.find(article => article.id === +id);
  //!!END
  //!!ADD
  // const singleArticle = articles.find(article => article.id === id);
  //!!END_ADD
  return (
    <div className='singleArticle'>
      {/*!!START SILENT */}
      <h1>{singleArticle?.title}</h1>
      {/*!!END */}
      {/*!!ADD */}
      {/* <h1>{singleArticle.title}</h1> */}
      {/*!!END_ADD */}
      <img
        //!!START SILENT
        src={singleArticle?.imageUrl}
        alt={singleArticle?.title}
        //!!END
        //!!ADD
        // src={singleArticle.imageUrl}
        // alt={singleArticle.title}
        //!!END_ADD
      />
      <p>
        {/*!!START SILENT */}
        {singleArticle?.body}
        {/*!!END */}
        {/*!!ADD */}
        {/* {singleArticle.body} */}
        {/*!!END_ADD */}
      </p>
    </div>
  );
};

export default SingleArticle;
