import {
  Box,
  Button,
  Center,
  Container,
  Input,
  Spinner,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import { loginNow } from "../redux/LoginReducer/Actions";


function LoginPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const loading = useSelector((store) => {
    return store.LoginReducer.isLoading;
  });
  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });


  useEffect(() => {
    if (token) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  }, [token]);

  function sumbit(e) {
    e.preventDefault();
    dispatch(loginNow(details))
      .then((res) => {
        if (res.token) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setDetails({
      email: "",
      password: "",
    });
  }

  return loading ? (
    <Spinner
      thickness="4px"
      mt={"25%"}
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Box h={'100vh'} bg={"#003049"}>
      <VStack>
        <Box pt={'15%'} pb={'10px'} boxSize={{base:"80%",md:'50%',lg:'30%'}}>
        <Text as={"b"} color={'white'} fontSize={'4xl'}>Login</Text>
        <form onSubmit={sumbit}>  
          <Input
            type="email"
            bg={'white'}
            value={details.email}
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            placeholder="Email"
            required={true}
            m={'10px'}
          />
          <Input
          bg={'white'}
            type="password"
            value={details.password}
            m={'10px'}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            placeholder="Password"
            required={true}
          />
          <Button type="submit">Login</Button>
        </form>
        </Box>
      </VStack>
      <Link to={"/register"}>
        <Text as={'b'} color={'white'}>
          <u>
        Register
          </u>
        </Text>
        </Link>
    </Box>
  );
}

export default LoginPage;
