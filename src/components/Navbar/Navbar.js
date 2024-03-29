import React, { useState } from "react";

import Button from "../Button/Button";
import NavItem from "../NavItem/NavItem";

const Navbar = (props) => {
  const [lifecycleState, setLifecycleState] = useState({
    isMainMenuVisible: false,
    isUserMenuVisible: false,
  });

  let handlePushToSignup = () => {    
    return props.history.push("/signup");
  };

  let handlePushToLogin = () => {
    return props.history.push("/login");
  };

  const handleMenuVisibilityToggle = () => {
    isMainMenuVisible
      ? setLifecycleState({
          ...lifecycleState,
          isMainMenuVisible: false,
        })
      : setLifecycleState({
          ...lifecycleState,
          isMainMenuVisible: true,
        });
  };

  const { isMainMenuVisible } = lifecycleState;
  return (
    <nav className="flex-grow-0 bg-gray-800 z-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex flex-row-reverse justify-between w-full items-center sm:items-stretch sm:flex-row">
            <div className=" inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onFocus={(e) => {
                  if (e.currentTarget === e.target) {
                    handleMenuVisibilityToggle();
                  }
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    handleMenuVisibilityToggle();
                  }
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                {isMainMenuVisible ? (
                  <div
                    className="origin-top-right absolute right-4 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex flex-col top-12"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="nav-menu"
                  >
                    <NavItem pathURL={"/signup"} pathName={"Sign up"} menuType={"primary"} />
                    <NavItem pathURL={"/login"} pathName={"Log in"} menuType={"secondary"} />
                  </div>
                ) : (
                  <span />
                )}
              </button>
            </div>
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
              <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
              />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                /> 
              </a>             
            </div>
            <div className="flex-row items-center justify-around w-1/6 hidden md:flex">
              <div className=" w-full mx-1">
                <Button                 
                  clickAction={handlePushToSignup}
                  clickEffect={"none"}
                  buttonType={"primary"}
                  buttonCTA={"Sign up"}
                />
              </div>
              <div className="w-full mx-1">
                <Button
                  clickAction={handlePushToLogin}
                  clickEffect={"none"}
                  buttonType={"secondary"}
                  buttonCTA={"Sign in"} 
                />
              </div>                            
            </div>          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
