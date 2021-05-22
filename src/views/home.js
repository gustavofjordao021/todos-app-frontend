import React, { useState, useEffect } from "react";

import AUTH_SERVICE from "../services/AuthService";
import USER_SERVICE from "../services/UserService";

import Hero from "../img/hero_img.png";

const Home = (props) => {
  // const [lifecycleState, setLifecycleState] = useState({
  //   error: "",
  //   render: false,
  //   uiLoading: true,
  // });

  // const [userDetailsState, setUserDetailsState] = useState({
  //   email: "",
  //   todos: [],
  //   lastName: "",
  //   username: "",
  //   firstName: "",
  // });

  // let loadAccountPage = (event) => {
  //   setLifecycleState({ render: true });
  // };

  // let loadTodoPage = (event) => {
  //   setLifecycleState({ render: false });
  // };

  // let logoutHandler = (event) => {
  //   localStorage.removeItem("AuthToken");
  //   props.history.push("/login");
  // };

  // useEffect(() => {
  //   AUTH_SERVICE.auth(props.history);
  //   USER_SERVICE.retrieveUserDetails()
  //     .then((response) => {
  //       setUserDetailsState({
  //         firstName: response.data.userCredentials.firstName,
  //         lastName: response.data.userCredentials.lastName,
  //         email: response.data.userCredentials.email,
  //         username: response.data.userCredentials.username,
  //       });
  //       setLifecycleState({ ...lifecycleState, uiLoading: false });
  //     })
  //     .catch((error) => {
  //       if (error.response.status === 403) {
  //         props.history.push("/login");
  //       }
  //       setLifecycleState({
  //         ...lifecycleState,
  //         error: "Error in retrieving the data.",
  //         uiLoading: false,
  //       });
  //     });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [
  //   userDetailsState.firstName,
  //   userDetailsState.lastName,
  //   userDetailsState.email,
  //   userDetailsState.username,
  // ]);

  // const { uiLoading } = lifecycleState;
  return (
    <>
      <div className="flex-grow bg-white min-h-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-center">
        <div className="md:flex md:justify-center">
          <img
            className="sm:h-72 md:h-96 lg:mx-8"
            src={Hero}
            alt="hero-banner"
          />
        </div>
        <div className="max-w-7xl min-h-full">
          <div className="relative pb-6 bg-white lg:max-w-2xl lg:w-full">
            <main className="mt-10 mx-6 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Never forget your</span>
                  <span className="block text-indigo-600 xl:inline">
                    {" "}tasks again!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Tale control of your schedule with Goalify so your tasks are never left unchecked on your to-do list again!
                </p>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-4 md:text-xl lg:mx-0">
                  Schedule chores or house tasks with ease, get notifications that actually work for you, and much more at your fingertips.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Sign up
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/login"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
