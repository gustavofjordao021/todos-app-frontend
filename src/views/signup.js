import React, { useState } from "react";

import {
  Box,
  Flex,
  Icon,
  Alert,
  Input,
  Button,
  Heading,
  AlertIcon,
  FormLabel,
  AlertTitle,
  InputGroup,
  FormControl,
  CloseButton,
  AlertDescription,
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
    isError: false,
    isLoading: false,
  });

  const [showPasswordState, setShowPasswordState] = useState({
    isPasswordVisible: false,
    isConfirmPasswordVisible: false,
  });

  let handleClearError = () => {
    setLifecycleState({ errors: [], isError: false, isLoading: false });
  };

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
    setLifecycleState({ ...lifecycleState, isLoading: true });
    const newUserData = {
      username: signupDetailsState.username,
      email: signupDetailsState.email,
      password: signupDetailsState.password,
      confirmPassword: signupDetailsState.confirmPassword,
    };
    AUTH_SERVICE.signup(newUserData)
      .then((response) => {
        localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
        setLifecycleState({ ...lifecycleState, isLoading: false });
        return props.history.push("/");
      })
      .catch((error) => {
        setLifecycleState({
          lifecycleState: error.response.data,
          isError: true,
          isLoading: false,
        });
      });
  };

  const { isError, isLoading } = lifecycleState;
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
            {isError ? (
              <Alert status="error" mt={2}>
                <AlertIcon />
                <Box flex="1">
                  <AlertTitle>Ops, something went wrong!</AlertTitle>
                  <AlertDescription display="block">
                    We can't sign you up with those credentials. Please try
                    again!
                  </AlertDescription>
                </Box>
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => handleClearError()}
                />
              </Alert>
            ) : (
              ""
            )}
            <Button
              isLoading={isLoading}
              loadingText="Submitting"
              colorScheme="purple"
              variant="solid"
              type="submit"
              width="full"
              mt={2}
            >
              Signup
            </Button>
            <Button
              colorScheme="purple"
              variant="outline"
              width="full"
              mt={2}
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
