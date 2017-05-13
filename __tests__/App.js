import React from "react";
import {shallow} from "enzyme";
import App from '../src/containers/App';

describe("Timeline App", () =>{
	it("wraps the content under a div with .notificationsFrame class", () =>{
		let wrapper = shallow(<App/>);
		const divs = wrapper.find('div');
		expect(divs.length).toBeGreaterThan(1);
		expect(divs.length).toBe(2);

		const notificationsDiv= wrapper.find('.notifications-frame');
		expect(notificationsDiv.length).toBe(1);
		
	});
});