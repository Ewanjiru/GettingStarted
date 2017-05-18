import AppDispatcher from './../dispatcher/AppDispatcher';
import appConstants from './../constants/AppConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
const _store = {
	articles: [],
	sources: [],
	selectedSource: 'the-next-web',
	sortby: 'top'
};

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
	getSources() {
		return _store.sources
	}

	setSources(source) {
		_store.sources = source
	}
	getArticles() {
		return _store.articles
	}

	setArticles(articles) {
		_store.articles = articles;
	}

	getSelectedSource() {
		return _store.selectedSource
	}

	setSelectedSource(source) {
		_store.selectedSource = source
	}

	getSelectedSortBy() {
		return _store.sortby
	}

	setSelectedSortBy(source) {
		_store.selectedSource = source
	}
}

const newsStore = new NewsStore();

newsStore.dispatchToken = AppDispatcher.register(action => {

	switch (action.actionType) {
		case appConstants.LOAD_HEADLINES:
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
		case appConstants.UPDATE_SOURCE:
			newsStore.setSelectedSource(action.data)
			newsStore.emitChange();
			break;

		default:
			return true

	}

});

export default newsStore;


