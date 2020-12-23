import React, { useState } from "react";

import {
  Box,
  Flex,
  Icon,
  Alert,
  Input,
  Button,
  Heading,
  FormLabel,
  AlertIcon,
  AlertTitle,
  CloseButton,
  InputGroup,
  FormControl,
  AlertDescription,
  InputRightElement,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import AUTH_SERVICE from "../services/AuthService";

const Login = (props) => {
  const [credentialsState, setCredentialsState] = useState({
    email: "",
    password: "",
  });

  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    isError: false,
    isLoading: false,
  });

  const [showPasswordState, setShowPasswordState] = useState({
    isVisible: false,
  });

  let handlePasswordVisibility = () => {
    showPasswordState.isVisible
      ? setShowPasswordState({ isVisible: false })
      : setShowPasswordState({ isVisible: true });
  };

  let handlePushToSignup = () => {
    return props.history.push("/signup");
  };

  let handleClearError = () => {
    setLifecycleState({ errors: [], isError: false, isLoading: false });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setLifecycleState({ errors: [], isError: false, isLoading: true });
    AUTH_SERVICE.login({
      email: credentialsState.email,
      password: credentialsState.password,
    })
      .then((response) => {
        localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
        setLifecycleState({
          ...lifecycleState,
          isLoading: false,
        });
        return props.history.push("/");
      })
      .catch((error) => {
        setLifecycleState({
          errors: error.response.data,
          isError: true,
          isLoading: false,
        });
      });
  };

  const { isError, isLoading } = lifecycleState;
  const { isVisible } = showPasswordState;
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
          <Heading>Login</Heading>
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
                  setCredentialsState({
                    ...credentialsState,
                    email: event.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl isRequired mt={6}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={isVisible ? "text" : "password"}
                  placeholder="*******"
                  size="lg"
                  onChange={(event) =>
                    setCredentialsState({
                      ...credentialsState,
                      password: event.target.value,
                    })
                  }
                />
                <InputRightElement w="3rem" h="100%">
                  <Button
                    h="1.5rem"
                    size="sm"
                    onClick={handlePasswordVisibility}
                  >
                    {isVisible ? (
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
                    We can't log you in with those credentials. Please try
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
              colorScheme="blue"
              variant="solid"
              type="submit"
              width="full"
              mt={2}
            >
              Login
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              width="full"
              mt={2}
              onClick={() => handlePushToSignup()}
            >
              Signup
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
