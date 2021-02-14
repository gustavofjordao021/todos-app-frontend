import React, { useState } from "react";

import NavItem from "../NavItem/NavItem";

const Navbar = (props) => {
  const [lifecycleState, setLifecycleState] = useState({
    isMainMenuVisible: false,
    isUserMenuVisible: false,
  });

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

  const handleUserMenuVisibility = () => {
    isUserMenuVisible
      ? setLifecycleState({
          ...lifecycleState,
          isUserMenuVisible: false,
        })
      : setLifecycleState({
          ...lifecycleState,
          isUserMenuVisible: true,
        });
  };

  const { isMainMenuVisible, isUserMenuVisible } = lifecycleState;
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
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
                class="hidden h-6 w-6"
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
                  class="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex flex-col top-12"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="nav-menu"
                >
                  <NavItem pathURL={"/home"} pathName={"Home"} />
                  <NavItem pathURL={"/about"} pathName={"About"} />
                  <NavItem pathURL={"/contactus"} pathName={"Contact us"} />
                </div>
              ) : (
                <span />
              )}
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div class="hidden sm:block sm:ml-6 sm:bg-gray-800">
              <div class="flex space-x-4">
                <NavItem
                  pathURL={"/home"}
                  pathName={"Home"}
                  menuType={"main"}
                />
                <NavItem
                  pathURL={"/about"}
                  pathName={"About"}
                  menuType={"main"}
                />
                <NavItem
                  pathURL={"/contactus"}
                  pathName={"Contact us"}
                  menuType={"main"}
                />
              </div>
            </div>
          </div>
          <div class="-ml-5 relative">
            <div>
              <button
                class="bg-gray-800 flex text-sm rounded-full ring-2 ring-white hover:rounded-full focus:bg-gray-600 focus:rounded-full"
                id="user-menu"
                aria-haspopup="true"
                onFocus={(e) => {
                  if (e.currentTarget === e.target) {
                    handleUserMenuVisibility();
                  }
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    handleUserMenuVisibility();
                  }
                }}
              >
                <p className="text-sm font-medium rounded-full text-white px-3 py-2 hover:bg-gray-600">
                  Profile
                </p>
                {isUserMenuVisible ? (
                  <div
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 flex flex-col top-12"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <NavItem pathURL={"/home"} pathName={"Home"} />
                    <NavItem pathURL={"/about"} pathName={"About"} />
                    <NavItem pathURL={"/contactus"} pathName={"Contact us"} />
                  </div>
                ) : (
                  <span />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
