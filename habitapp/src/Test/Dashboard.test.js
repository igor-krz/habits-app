import React from "react";
import Dashboard from "../Containers/Dashboard";
import { shallow, mount } from "enzyme";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
window.alert = jest.fn();

describe("Dashboard Page", () => {
  //   it("should render a HabitCheckForm ", () => {
  //     const component = shallow(<Dashboard />);
  //     expect(component.exists("HabitCheckForm")).toEqual(true);
  //   });
});
