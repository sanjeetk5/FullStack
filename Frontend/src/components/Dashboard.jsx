import React, { useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Divider,
  HStack,
  Button,
  VStack,
  Heading,
  Center,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { action_get_Data } from "../redux/DashboardReducer/Action";
import { useDispatch, useSelector } from "react-redux";
import NoteList from "./NoteList";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const dispatch = useDispatch();

  const token = useSelector((store) => {
    return store.LoginReducer.token;
  });

  const data = useSelector((store) => {
    return store.Dashboardreducer.data;
  });

  const handleCreateUser = () => {};

  useEffect(() => {
    dispatch(action_get_Data(token));
  }, []);

  return (
    <Box bg="#003049" h="100vh">
      <Box px={5} py={1} display={"flex"} justifyContent={"space-between"}>
        <Heading
          color={"#fff"}
          fontWeight={"400"}
          fontStyle={"italic"}
          fontFamily={"monoscape"}
          letterSpacing={1}>
          Note Application
        </Heading>
        <Menu>
          <MenuButton as={Button}>Profile</MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Divider />
      <HStack p={5}>
        <VStack flex={1}>
          <Link to="/notes" width={"100%"}>
            <Button>Add Notes</Button>
          </Link>
          <Link to="/dashboard">
            <Button width={"100%"}>All Notes</Button>
          </Link>
        </VStack>
        <Box flex={3}>
          {data.length > 0 ? (
            <Center>
              <TableContainer color={"#fff"}>
                <Table variant="simple">
                  <TableCaption>Note List</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>S.no</Th>
                      <Th>Title</Th>
                      <Th>Note</Th>
                      <Th>View</Th>
                      <Th>Edit</Th>
                      <Th>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((item, ind) => {
                      return (
                        <NoteList {...item} key={Math.random()} ind={ind + 1} />
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              ;
            </Center>
          ) : (
            <Center>
              <Button onClick={handleCreateUser}>Create Notes</Button>
            </Center>
          )}
        </Box>
      </HStack>
    </Box>
  );
}
