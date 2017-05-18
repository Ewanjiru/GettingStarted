import React from "react";
import { shallow } from "enzyme";
import App from '../src/containers/App';

describe("NewsApp", () => {
	it("wraps the content under a div with .main-frame class", () => {
		let wrapper = shallow(<App />);
		const divs = wrapper.find('div');
		const notificationsDiv = wrapper.find('.main-frame');
		expect(notificationsDiv.length).toBe(1);

	});
});