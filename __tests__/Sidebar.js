import React from "react";
import { shallow } from "enzyme";
import Sidebar from '../src/components/Sidebar/Sidebar.js';

describe("The NewsApp Sidebar", () => {
  let wrapper;
  it("wraps the content under a div with .aside class", () => {
    wrapper = shallow(<Sidebar />);
    const divs = wrapper.find('div');
    const sidebar = wrapper.find('.aside');
    expect(notificationsDiv.length).toBe(1);
  });

  it("should have a sortdropdown", () => {
    wrapper = mount(<Sidebar />);
    let dropdown = wrapper.find('<Sort/>');
    dropdown.simulate('click');
    expect(logout.hasClass('active')).toBeTruthy()
  });
})
