import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";

import AUTH_SERVICE from "../services/AuthService";
import USER_SERVICE from "../services/UserService";

const Home = (props) => {
  const [lifecycleState, setLifecycleState] = useState({
    error: "",
    render: false,
    uiLoading: true,
  });

  const [userDetailsState, setUserDetailsState] = useState({
    email: "",
    todos: [],
    lastName: "",
    username: "",
    firstName: "",
  });

  let loadAccountPage = (event) => {
    setLifecycleState({ render: true });
  };

  let loadTodoPage = (event) => {
    setLifecycleState({ render: false });
  };

  let logoutHandler = (event) => {
    localStorage.removeItem("AuthToken");
    props.history.push("/login");
  };

  useEffect(() => {
    AUTH_SERVICE.auth(props.history);
    USER_SERVICE.retrieveUserDetails()
      .then((response) => {
        setUserDetailsState({
          firstName: response.data.userCredentials.firstName,
          lastName: response.data.userCredentials.lastName,
          email: response.data.userCredentials.email,
          username: response.data.userCredentials.username,
        });
        setLifecycleState({ ...lifecycleState, uiLoading: false });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          props.history.push("/login");
        }
        setLifecycleState({
          ...lifecycleState,
          error: "Error in retrieving the data.",
          uiLoading: false,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    userDetailsState.firstName,
    userDetailsState.lastName,
    userDetailsState.email,
    userDetailsState.username,
  ]);

  const { uiLoading } = lifecycleState;
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
