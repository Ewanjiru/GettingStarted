import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/AppConstants';

export default {
	getHeadlines: (category = '') => {
		axios.get('https://newsapi.org/v1/sources?language=en&category=' + category)
			.then((articlesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_CATEGORY,
					data: articlesResponse.data.sources
				});
			})
			.catch(message => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_HEADLINES_ERROR,
					message: message
				});
			});
	},

	returnSources: () => {
		axios.get('https://newsapi.org/v1/sources')
			.then((sourcesResponse) => {
				AppDispatcher.dispatch({
					actionType: appConstants.GET_SOURCES,
					data: sourcesResponse.data.sources
				});
			});
	},
	showSelected: (category) => {
		let selected = category
		AppDispatcher.dispatch({
			actionType: appConstants.GET_SELECTED,
			data: selected
		});
	}

}