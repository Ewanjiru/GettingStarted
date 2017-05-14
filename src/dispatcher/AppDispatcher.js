import { Dispatcher } from 'flux';

export default class AppDispatcher extends Dispatcher{

	handleAction(action){
		this.dispatch({
			source: 'GET_CATEGORY',
			action: 'action',
		});
	}
	
}
