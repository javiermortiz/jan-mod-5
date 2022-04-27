import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { fetchArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  
  const articles = useSelector(state=>state.articleState.entries);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {/*!!START SILENT */}
        {Object.values(articles).map(({ id, title }) => (
        //!!END
        //!!ADD
        // {articles.map(({ id, title }) => (
        //!!END_ADD 
          <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
        ))}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle articles={articles} />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;
