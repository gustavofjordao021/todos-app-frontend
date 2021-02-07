import React, { useState } from "react";

import NavItem from "../NavItem/NavItem";

const Navbar = (props) => {
  const [lifecycleState, setLifecycleState] = useState({
    isMenuVisible: false,
  });

  const handleMenuVisibilityToggle = () => {
    isMenuVisible
      ? setLifecycleState({
          ...lifecycleState,
          isMenuVisible: false,
        })
      : setLifecycleState({
          ...lifecycleState,
          isMenuVisible: true,
        });
  };

  const { isMenuVisible } = lifecycleState;
  return (
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => handleMenuVisibilityToggle()}
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
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <NavItem pathURL={"/home"} pathName={"Home"} />
                <NavItem pathURL={"/about"} pathName={"About"} />
                <NavItem pathURL={"/contactus"} pathName={"Contact us"} />
              </div>
            </div>
          </div>
          {isMenuVisible ? (
            <div
              class="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 flex flex-col top-12"
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
          <div class="-ml-5 relative">
            <div>
              <button
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
