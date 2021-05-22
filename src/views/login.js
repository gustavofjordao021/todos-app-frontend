import React, { useState } from "react";

// Importing abstracted components
import Alert from "../components/Alert/Alert";
import Button from "../components/Button/Button";

// Importing service with routes to authorization
import AUTH_SERVICE from "../services/AuthService.js";

const Login = (props) => {
  // State to hold credentials on form
  const [credentialsState, setCredentialsState] = useState({
    email: "",
    password: "",
  });

  // State to handle lifecycle changes
  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    isError: false,
    isLoading: false,
  });

  // State to toggle password visibility
  const [showPasswordState, setShowPasswordState] = useState({
    isVisible: false,
  });

  // Function to toggle password visibility
  let handlePasswordVisibility = () => {
    showPasswordState.isVisible
      ? setShowPasswordState({ isVisible: false })
      : setShowPasswordState({ isVisible: true });
  };

  // Function to route users to Signup page
  let handlePushToSignup = () => {
    return props.history.push("/signup");
  };

  // Function to handle Login credentials submission
  let handleSubmit = (event) => {
    event.preventDefault();
    if (credentialsState.email.length === 0 || credentialsState.password.length === 0) {
      setLifecycleState({
        errors: "Please confirm all credentials before trying to log in.",
        isError: true,
        isLoading: false,
      });
    } else {
      setLifecycleState({ errors: [], isError: false, isLoading: true });
    AUTH_SERVICE.login({
      email: credentialsState.email,
      password: credentialsState.password,
    })
      .then((response) => {
        setLifecycleState({
          ...lifecycleState,
          isLoading: false,
        });
        return props.history.push("/");
      })
      .catch((error) => {      
        setLifecycleState({
          errors: error.response.data.message,
          isError: true,
          isLoading: false,
        });
      });
    }
  };

  const { isError, isLoading } = lifecycleState;
  const { isVisible } = showPasswordState;
  return (
    <>
      <div className="min-h-full flex flex-grow items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 lg:text-3xl">
              Log in to{" "}
              <span className="relative inline-block">
                <span className="z-20 relative">Goalify!</span>
                <div className="bg-indigo-300 absolute w-full h-2 bottom-0.5 z-10"></div>
              </span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <span
                className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer"
                onClick={() => handlePushToSignup()}
              >
                {" "}
                click here to sign up now!
              </span>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-2">
                {isError ? (
                  <Alert
                    alertMessage={lifecycleState.errors}
                    alertType={"error"}
                  />
                ) : (
                  ""
                )}
                <label
                  for="email-address"
                  className="block text-sm font-medium text-gray-700 mb-1 pl-3"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 mb-1 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setCredentialsState({
                      ...credentialsState,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-2">
                <label
                  for="price"
                  class="block text-sm font-medium text-gray-700 pl-3"
                >
                  Password
                </label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    autocomplete="current-password"
                    required
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Password"
                    onChange={(e) =>
                      setCredentialsState({
                        ...credentialsState,
                        password: e.target.value,
                      })
                    }
                  />
                  <div class="absolute inset-y-0 right-3 flex items-center">
                    {isVisible ? (
                      <img
                        src="https://img.icons8.com/ios-filled/30/000000/show-password.png"
                        alt="password-reveal"
                        className="cursor-pointer h-6"
                        onClick={() => {
                          handlePasswordVisibility();
                        }}
                      />
                    ) : (
                      <img
                        src="https://img.icons8.com/ios/30/000000/show-password.png"
                        alt="password-reveal"
                        className="cursor-pointer h-6"
                        onClick={() => {
                          handlePasswordVisibility();
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button
                clickAction={handleSubmit}
                clickEffect={isLoading}
                buttonType={"primary"}
                buttonCTA={"Log in"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
