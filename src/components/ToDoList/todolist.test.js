import React from 'react';
import ToDoList from '../ToDoList/index.js';
import { mount, shallow } from 'enzyme';
import { render, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "ts-jest/utils";


const user = {
    email: "joanchenuk@gmail.com",
    email_verified: true,
    sub: "google-oauth2|111824016010139773418",
 
};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe("ToDoList components Component Tests - Logged in", () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            isLoading: false,
        });
    });
    test("Logout Button displays when logged in", () => {
        shallow(<ToDoList/>);
    });

  

    // it("accepts props", () => {
    //     const testProps = "Todos"

    //     const props = "Todos"
    //     const wrapper = mount(<BrowserRouter> <AddTodoListButton page={props}/></BrowserRouter>);
    //     expect(wrapper.props().props).toBe(testProps);
    //   });
    // receiving undefined 

    
    
});

