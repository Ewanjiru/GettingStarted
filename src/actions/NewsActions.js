import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/AppConstants';


export function getHeadlines(category) {
	axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&category='+{category}+'&apiKey=14ddece6f2294cbfada7f4d14d46d364')
		.then( (articlesResponse) => {  

			articles: articlesResponse.data.articles	
		})
		.catch(error => console.log(error))

		AppDispatcher.handleAction({
		actionType : appConstants.GET_CATEGORY,
		data: articles
	})
}