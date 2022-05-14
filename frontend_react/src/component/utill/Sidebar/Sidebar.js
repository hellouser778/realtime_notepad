import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,CloseButton ,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerFooter,
  DrawerCloseButton,
  useDisclosure,
  Input,
  WrapItem,
  Avatar,
  Wrap,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <ArrowRightIcon
        m={2}
        p={2}
        bg="tomato"
        color="white"
        fontSize="2em"
        onClick={onOpen}
      >
        {" "}
      </ArrowRightIcon>

      <Drawer
        w="25%"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay backgroundColor="#2A4365" w="25%" />
        <DrawerContent w="25%">
          <DrawerCloseButton w="50%" />
          <DrawerHeader w="50%">
            <Wrap>
              <WrapItem>
                <Avatar w="50px" border="50px" size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
              </WrapItem>
            </Wrap>
          </DrawerHeader>

          <DrawerBody w="25%">
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter w="25%">
            <Button w="25%" variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button w="25%" colorScheme="blue">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
