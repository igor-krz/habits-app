import React from "react";
import RegisterPage from "../Containers/RegisterPage";
import { shallow, mount } from "enzyme";
import { BrowserRouter, Link, Switch } from "react-router-dom";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
window.alert = jest.fn();
describe("Register Page", () => {
  let wrapper;
  let wrap;

  beforeEach(() => {
    wrapper = shallow(<RegisterPage />);
    wrap = mount(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );
  });

  it("renders main register div", () => {
    expect(wrapper.exists("#HomePage")).toEqual(true);
  });

  it("Should include form", () => {
    expect(wrapper.exists("form")).toEqual(true);
  });

  it("includes 1 buttons", () => {
    expect(wrapper.exists("button")).toEqual(true);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should have 5 inputs", () => {
    expect(wrapper.find("input").length).toEqual(5);
  });

  it("check the user input", () => {
    wrapper = mount(<RegisterPage />);
    const input = wrapper.find("input");
    expect(input).toHaveLength(5);
  });

  it("renders submit button with custom text", () => {
    wrapper = mount(<RegisterPage />);
    const button = wrapper.find("button");
    expect(button).toHaveLength(1);
    expect(button.prop("type")).toEqual("submit");
    expect(button.text()).toEqual("Sign up");
  });
  it("calls onSubmit function when submitted", () => {
    const wrapper = mount(<RegisterPage />);
    wrapper.find("#signUpbutton").simulate("change", {
      target: { toLogin: true },
    });
  });
});
