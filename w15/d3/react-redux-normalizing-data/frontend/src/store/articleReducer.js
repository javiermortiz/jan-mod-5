const LOAD_ARTICLES = 'articles/loadArticles';
const ADD_ARTICLE = 'articles/addArticle';

export const loadArticles = (articles) => {
  return {
    type: LOAD_ARTICLES,
    articles
  };
};

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};

export const fetchArticles = () => async (dispatch) => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(loadArticles(articles));
};

export const writeArticle = (payload) => async (dispatch) => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const article = await response.json();
    dispatch(addArticle(article));
    return article;
  }
};

//!!START SILENT
const initialState = { entries: {}, isLoading: true };
//!!END
//!!ADD
// const initialState = { entries: [], isLoading: true };
//!!END_ADD

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES: 
      //!!START SILENT
      const newState = { ...state, entries: { ...state.entries } };
      action.articles.forEach(
        (article) => (newState.entries[article.id] = article)
      );
      return newState;
      //!!END
      //!!ADD
      // return { ...state, entries: [...action.articles] };
      //!!END_ADD
    case ADD_ARTICLE:
      //!!START SILENT
      return {
        ...state,
        entries: { ...state.entries, [action.article.id]: action.article }
      };
      //!!END
      //!!ADD
      // return { ...state, entries: [...state.entries, action.article] };
      //!!END_ADD
    default:
      return state;
  }
};

export default articleReducer;
