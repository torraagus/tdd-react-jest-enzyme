import React from "react";
// import { render } from "@testing-library/react";
import App from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("Counter testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("render the title of the counter", () => {
    expect(wrapper.find("h1").text()).toContain("Counter app");
  });

  test("render a button with text Increment", () => {
    expect(wrapper.find("#btnIncrement").text()).toBe("Increment");
  });

  test("render initial value", () => {
    expect(wrapper.find("#counter").text()).toBe("0");
  });

  test("render click event of increment button and increment counter value by 1", () => {
    wrapper.find("#btnIncrement").simulate("click");
    expect(wrapper.find("#counter").text()).toBe("1");
  });

  test("render click event of decrement button and decrement counter by 1", () => {
    wrapper.find("#btnIncrement").simulate("click");
    expect(wrapper.find("#counter").text()).toBe("1");
    wrapper.find("#btnDecrement").simulate("click");
    expect(wrapper.find("#counter").text()).toBe("0");
  })

  test("that counter does not take negative numbers", () => {
    wrapper.find("#btnDecrement").simulate("click");
    expect(wrapper.find("#counter").text()).toBe("0");
  })
});

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
