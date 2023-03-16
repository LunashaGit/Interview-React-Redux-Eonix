import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Home from "../views/Home";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import history from "../utils/history";
import HomeContainer from "../containers/HomeContainer";

configure({ adapter: new Adapter() });
const initialState = {};
const store = configureStore(initialState, history);

describe("Home component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Home />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  // Increment
  it("should increment count", () => {
    const wrapper = shallow(<Home />);
    wrapper.find("button").at(0).simulate("click");
    expect(wrapper.find("h1").text()).toEqual("Counter: ");
  });

  // Decrement
  it("should decrement count", () => {
    const wrapper = shallow(<Home store={store} />);
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.find("h1").text()).toEqual("Counter: ");
  });
});
