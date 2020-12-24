import React, { useState, useEffect } from "react";

import AUTH_SERVICE from "../services/AuthService";
import USER_SERVICE from "../services/UserService";

const Home = (props) => {
  const [lifecycleState, setLifecycleState] = useState({
    render: false,
    error: "",
  });
  const [userDetailsState, setUserDetailsState] = useState({
    firstName: "",
    lastName: "",
    profilePicture: "",
    uiLoading: true,
    imageLoading: false,
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
          phoneNumber: response.data.userCredentials.phoneNumber,
          country: response.data.userCredentials.country,
          username: response.data.userCredentials.username,
          profilePicture: response.data.userCredentials.imageUrl,
          uiLoading: false,
        });
      })
      .catch((error) => {
        if (error.response.status === 403) {
          props.history.push("/login");
        }
        setLifecycleState({
          ...lifecycleState,
          error: "Error in retrieving the data.",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { classes } = props;
  if (userDetailsState.uiLoading === true) {
  } else {
  }
};

export default Home;
