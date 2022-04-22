import React from "react";

import { shallow } from "enzyme";
import ProfilePage from "./index.js";
import Header from "../Header/index.js";
import Profile from "../Profile/index.js";

describe("<ProfilePage /> rendering", () => {
  it("render App Component without crashing", () => {
    //testing a single component without child components
    shallow(<ProfilePage />);
  });
  it("render Header Component without crashing", () => {
    //testing a single component without child components
    shallow(<Header />);
  });

  it("render Profile Component without crashing", () => {
    //testing a single component without child components
    shallow(<Profile />);
  });
});
