import React from "react";
import ForeCastDetails from "./ForeCastDetails";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

describe("Details component", () => {
  const data = [
    {
      id: 1,
      icon: "10dn",
      date: "Friday, Nov 20",
      descriptions: "some description",
      temp_min: "10",
      temp_max: "12",
      humidity: "15"
    }
  ];

  let wrap;

  beforeEach(() => {
    wrap = shallow(<ForeCastDetails city="London" data={data} />);
  });

  it("should render ForeCastDetails with given props", () => {
    expect(shallowToJson(wrap)).toMatchSnapshot();
  });
   
  it("should render with city name", () => {
    expect(wrap.find(`[data-testid='city']`).text()).toMatch("London");
  });

  it("should render with city name", () => {
    expect(wrap.find(`[data-testid='maxTemp']`).text()).toMatch(
      " max temp : 12"
    );
  });

  it("should render with city name", () => {
    expect(wrap.find(`[data-testid='minTemp']`).text()).toMatch(
      " min temp : 10"
    );
  });


});
