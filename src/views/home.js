import React, { useState, useEffect } from "react";

import AUTH_SERVICE from "../services/AuthService";
import USER_SERVICE from "../services/UserService";

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
      <div className=" bg-white overflow-hidden min-h-full">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
        <div className="max-w-7xl mx-auto min-h-full">
          <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>
                  <span className="block text-indigo-600 xl:inline">
                    online business
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
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
