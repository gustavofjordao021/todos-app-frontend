import React, { useState } from "react";

import {
  Box,
  Flex,
  Icon,
  Input,
  Button,
  Heading,
  FormLabel,
  InputGroup,
  FormControl,
  CircularProgress,
  InputRightElement,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import AUTH_SERVICE from "../services/AuthService";

const Signup = (props) => {
  const [signupDetailsState, setSignupDetailsState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    loading: false,
  });

  const [showPasswordState, setShowPasswordState] = useState({
    isPasswordVisible: false,
    isConfirmPasswordVisible: false,
  });

  let handlePasswordVisibility = () => {
    showPasswordState.isPasswordVisible
      ? setShowPasswordState({ ...showPasswordState, isPasswordVisible: false })
      : setShowPasswordState({ ...showPasswordState, isPasswordVisible: true });
  };

  let handleConfirmPasswordVisibility = () => {
    showPasswordState.isConfirmPasswordVisible
      ? setShowPasswordState({
          ...showPasswordState,
          isConfirmPasswordVisible: false,
        })
      : setShowPasswordState({
          ...showPasswordState,
          isConfirmPasswordVisible: true,
        });
  };

  let handlePushToLogin = () => {
    return props.history.push("/login");
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setLifecycleState({ ...lifecycleState, loading: true });
    const newUserData = {
      username: signupDetailsState.username,
      email: signupDetailsState.email,
      password: signupDetailsState.password,
      confirmPassword: signupDetailsState.confirmPassword,
    };
    AUTH_SERVICE.signup(newUserData)
      .then((response) => {
        localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
        setLifecycleState({ ...lifecycleState, loading: false });
        return props.history.push("/");
      })
      .catch((error) => {
        setLifecycleState({
          lifecycleState: error.response.data,
          loading: false,
        });
      });
  };

  const { loading } = lifecycleState;
  const { isPasswordVisible, isConfirmPasswordVisible } = showPasswordState;
  return (
    <Flex h="100vh" w="100%" align="center" justifyContent="center">
      <Box
        p={10}
        w="25rem"
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Signup</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="test@test.com"
                size="lg"
                onChange={(event) =>
                  setSignupDetailsState({
                    ...signupDetailsState,
                    email: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Username"
                size="lg"
                onChange={(event) =>
                  setSignupDetailsState({
                    ...signupDetailsState,
                    username: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="*******"
                  size="lg"
                  onChange={(event) =>
                    setSignupDetailsState({
                      ...signupDetailsState,
                      password: event.target.value,
                    })
                  }
                />
                <InputRightElement w="3rem" h="100%">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={() => handlePasswordVisibility()}
                  >
                    {isPasswordVisible ? (
                      <Icon as={ViewOffIcon} />
                    ) : (
                      <Icon as={ViewIcon} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Confirm password</FormLabel>
              <InputGroup>
                <Input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder="*******"
                  size="lg"
                  onChange={(event) =>
                    setSignupDetailsState({
                      ...signupDetailsState,
                      confirmPassword: event.target.value,
                    })
                  }
                />
                <InputRightElement w="3rem" h="100%">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={() => handleConfirmPasswordVisibility()}
                  >
                    {isConfirmPasswordVisible ? (
                      <Icon as={ViewOffIcon} />
                    ) : (
                      <Icon as={ViewIcon} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              isLoading={loading}
              loadingText="Submitting"
              variantColor="blue"
              variant="solid"
              type="submit"
              width="full"
              mt={4}
            >
              Signup
            </Button>
            <Button
              variantColor="teal"
              variant="outline"
              width="full"
              mt={4}
              onClick={() => handlePushToLogin()}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Signup;
