import AppDispatcher from './../dispatcher/AppDispatcher';
import appConstants from './../constants/AppConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
let selected = null;
const _store = {
	articles: [],
	sources: []
};

function setSelected(category) {
	selected = category;
}

class NewsStore extends EventEmitter {

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}

	getArticles() {
		return _store.articles
	}

	setArticles(articles) {
		_store.articles = articles;
	}

	getSelected() {
		return selected
	}

	getSources() {
		return _store.sources
	}

	setSources(source) {
		_store.sources = source
	}
}

const newsStore = new NewsStore();

newsStore.dispatchToken = AppDispatcher.register(action => {

	switch (action.actionType) {
		case appConstants.GET_CATEGORY:
			newsStore.setArticles(action.data);
			newsStore.emitChange();
			break;
		case appConstants.GET_HEADLINES_ERROR:
			alert(action.message);
			newsStore.emitChange();
			break;
		case appConstants.GET_SOURCES:
			newsStore.setSources(action.data);
			newsStore.emitChange();
			break;
		case appConstants.GET_SELECTED:
			setSelected(action.category)
			newsStore.emitChange();
			break;

		default:
			return true

	}

});

export default newsStore;


