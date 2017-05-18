import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/AppConstants';
const googleid = "868328857754-msrf0blht1sr8nrsorh2da2b1aiv7umq.apps.googleusercontent.com"
const secretkey = "aPQ0cLcGQkWEVz_KmL-BGq0E"
export default {
	//loads by default latest articles from The next web
	loadHeadlines: () => {
		axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=14ddece6f2294cbfada7f4d14d46d364')
			.then((articlesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.LOAD_HEADLINES,
					data: articlesResponse.data.articles
				});
			})
			.catch(message => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_HEADLINES_ERROR,
					message: message
				});
			});
	},
	onclickGetHeadlines: (source) => {
		axios.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=14ddece6f2294cbfada7f4d14d46d364')
			.then((articlesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.LOAD_HEADLINES,
					data: articlesResponse.data.articles
				});
			})
			.catch(message => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_HEADLINES_ERROR,
					message: message
				});
			});
	},

	onclickUpdateSource: (source) => {
		AppDispatcher.dispatch({
			actionType: appConstants.UPDATE_SOURCE,
			data: source
		});
	},

	returnSources: () => {
		axios.get('https://newsapi.org/v1/sources')
			.then((sourcesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_SOURCES,
					data: sourcesResponse.data.sources,
				});
			});
	},

	returnSortbySources: (category) => {
		axios.get('https://newsapi.org/v1/sources?category=' + category)
			.then((sourcesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_SOURCES,
					data: sourcesResponse.data.sources,
				});
			})
			.catch(message => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_HEADLINES_ERROR,
					message: message
				});
			});
	},

}