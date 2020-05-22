import React from "react";
import LoginPage from "../Containers/LoginPage";
import { shallow, mount } from "enzyme";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { enableFetchMocks } from "jest-fetch-mock";

enableFetchMocks();
window.alert = jest.fn();
describe("Navigation", () => {
  let wrapper;
  let wrap;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
    wrap = mount(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  });

  it("renders main LoginPage div", () => {
    expect(wrapper.exists("#HomePage")).toEqual(true);
  });

  it("Should include form", () => {
    expect(wrapper.exists("form")).toEqual(true);
  });

  it("includes 2 buttons", () => {
    expect(wrapper.exists("button")).toEqual(true);
    expect(wrapper.find("button").length).toBe(2);
  });

  it("includes link to RegisterPage", () => {
    expect(wrap.find(Link).props().to).toBe("/register");
  });

  it("should have 2 inputs", () => {
    expect(wrapper.find("input").length).toEqual(2);
  });

  it("On change the value should change", () => {
    wrap
      .find("input")
      .at(0)
      .simulate("change", { target: { name: "username", value: "creole" } });
    expect(wrap.find("input").at(0).prop("value")).toEqual("creole");
  });
  it("On submit fetch should happen", () => {
    wrap.find("form").simulate("submit");
    fetch.mockResponseOnce(
      JSON.stringify({ user_id: 3, userName: "Carol", surName: "Rein" })
    );
    expect(fetch.mock.calls.length).toEqual(1);
  });
});
