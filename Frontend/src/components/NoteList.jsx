import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Button, Center, Icon, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
export default function NoteList({ _id, title, note, ind }) {
  return (
    <Tr cursor={"pointer"}>
      <Td>{ind}</Td>
      <Td>{title}</Td>
      <Td>{note}</Td>
      <Td>
        <Center>
          <Icon color={"#fff"} fontSize={"20px"}>
            <ViewIcon />
          </Icon>
        </Center>
      </Td>
      <Td>
        <Center>
          {" "}
          <Icon color={"#fff"} fontSize={"20px"}>
            <EditIcon />
          </Icon>
        </Center>
      </Td>

      <Td>
        <Center>
          <Icon color={"#fff"} fontSize={"20px"}>
            <DeleteIcon />
          </Icon>
        </Center>
      </Td>
    </Tr>
  );
}
