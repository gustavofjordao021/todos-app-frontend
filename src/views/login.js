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

const Login = (props) => {
  const [credentialsState, setCredentialsState] = useState({
    email: "",
    password: "",
  });
  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    loading: false,
  });
  const [showPasswordState, setShowPasswordState] = useState({
    isVisible: false,
  });

  let handlePasswordVisibility = () => {
    showPasswordState.isVisible
      ? setShowPasswordState({ isVisible: false })
      : setShowPasswordState({ isVisible: true });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setLifecycleState({ errors: [], loading: true });
    const userData = {
      email: credentialsState.email,
      password: credentialsState.password,
    };
    AUTH_SERVICE.login(userData)
      .then((response) => {
        localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
        setLifecycleState({
          errors: [],
          loading: false,
        });
        return props.history.push("/");
      })
      .catch((error) => {
        setLifecycleState({
          errors: error.response.data,
          loading: false,
        });
      });
  };

  const { loading } = lifecycleState;
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
            <Button
              variantColor="teal"
              variant="outline"
              type="submit"
              width="full"
              mt={4}
            >
              {loading ? (
                <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
