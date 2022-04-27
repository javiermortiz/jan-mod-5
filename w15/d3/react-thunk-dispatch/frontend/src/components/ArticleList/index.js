import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
//!!START SILENT
import { fetchArticles, loadArticles } from '../../store/articleReducer';
//!!END
//!!ADD
// import { loadArticles } from '../../store/articleReducer';
//!!END_ADD

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state=>state.articleState.entries);

  useEffect(() => {
    //!!START SILENT
    dispatch(fetchArticles());
    //!!END
    //!!ADD
    // dispatch(loadArticles());
    //!!END_ADD
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
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
