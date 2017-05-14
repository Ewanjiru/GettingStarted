import AppDispatcher from './../dispatcher/AppDispatcher';
import appConstants from './../constants/appConstants';
import objectAssign from 'Object-assign';  
import { EventEmitter } from 'events';


var _store = {
	articles:[]
};
 	
   
const newsStore = objectAssign({}, EventEmitter.prototype,{
  addChangeListener(cb){
  	this.on('change',cb);
  },

  removeChangeListener(cb){
  	this.removeListener('change',cb)
  },

  getArticles(){
  	return _store.articles
  },
})


AppDispatcher.register((payload)=>{
	let action = payload.action

	switch(action.actionType){
		case appConstants.GET_CATEGORY:
			this.articles = action.articles;
			this.emit('change');
			break;

		default:
			return true

	}

});

module.exports = newsStore;

  
