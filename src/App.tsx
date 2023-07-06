import "./App.css";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import logo from "./assets/logo.svg";
import dashboardImg from "./assets/illustration-dashboard.png";
import { useState } from "react";
import Twitter from "./Components/Twitter";
import Insta from "./Components/Insta";
import Facebook from "./Components/Facebook";
import { ArrowBackIcon } from "@chakra-ui/icons";
import gif from "./assets/giphy.gif";

function App() {
  const [value, setValue] = useState("");
  const [isError, setisError] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e: any) => {
    e.preventDefault();    
    if (
      value &&
      value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setisError(false);
      onOpen();
      setValue("");      
    } else setisError(true);
  };
  return (
    <>
      <Flex minH={"100vh"} justify={"center"} align={"center"}>
        <Flex
          as="main"
          direction={"column"}
          align={"center"}
          justify={"center"}
          py={"4rem"}
          px={"2rem"}          
          maxW={"40rem"}
        >
          <Image src={logo} alt="logo" w={"4rem"} h={"100%"} mt={[5, 0]} />
          <Heading
            as={"h1"}
            fontSize={["1.8rem", "2.5rem"]}
            fontWeight={"light"}
            color={"Gray"}
            mt={"2.5rem"}
            mb={3}
          >
            We are launching&nbsp;
            <span style={{ fontWeight: "700", color: "black" }}>soon!</span>
          </Heading>
          <Text color={"VeryDarkBlue"} mb={10}>
            Subscribe and get notified
          </Text>
          {/* form  */}
          <Flex
            as={"form"}
            onSubmit={(e) => handleSubmit(e)}
            direction={["column", "row"]}
            // bg={"teal"}
            width={"full"}
            gap={3}
            mb={10}
          >
            <FormControl isInvalid={isError}>
              <Input
                type="email"
                placeholder="Your email address..."
                rounded={"full"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                p={6}
                _placeholder={{
                  fontWeight: "300",
                  color: "PaleBlue",
                  opacity: ".7",
                }}
                _focus={{
                  borderColor: "PaleBlue",
                }}
                errorBorderColor="LightRed"
                sx={{
                  borderColor: "PaleBlue",
                }}
                // borderColor={"PaleBlue"}
              />
              {isError && (
                <FormErrorMessage
                  // textAlign={"start"}
                  fontStyle={"italic"}
                  fontSize={".8rem"}
                  w={"fit-content"}
                  mx={["auto", "7"]}
                  color={"LightRed"}
                  mb={3}
                >
                  Please provide a valid email address
                </FormErrorMessage>
              )}
            </FormControl>
            <Button
              type="submit"
              bg={"Blue"}
              color={"white"}
              rounded={"full"}
              p={6}
              w={["auto", "15rem"]}
              boxShadow={"0 5px 30px hsl(223, 100%, 88%)"}
            >
              Notify Me
            </Button>
          </Flex>
          <Image src={dashboardImg} alt="dashboard img" my={"3rem"} />
          {/* Social handles  */}
          <Flex gap={5} mt={["5rem", "2rem"]}>
            <IconButton
              as={"a"}
              href="#fb"
              aria-label="facebook icon"
              icon={<Facebook color={"hsl(223,87%,63%)"} size={"1.3rem"} />}
              w={"2rem"}
              h={"2.5rem"}
              rounded={"full"}
              bg={"transparent"}
              border={"1px solid hsl(223, 100%, 88%)"}
              _hover={{
                bg: "Blue",
                path: {
                  fill: "white",
                },
              }}
            />
            <IconButton
              as={"a"}
              href="#twitter"
              aria-label="facebook icon"
              icon={<Twitter color={"hsl(223,87%,63%)"} size={"1.3rem"} />}
              w={"2rem"}
              h={"2.5rem"}
              rounded={"full"}
              bg={"transparent"}
              border={"1px solid hsl(223, 100%, 88%)"}
              _hover={{
                bg: "Blue",
                path: {
                  fill: "white",
                },
              }}
            />
            <IconButton
              as={"a"}
              href="#insta"
              aria-label="facebook icon"
              icon={<Insta color={"hsl(223,87%,63%)"} size={"1rem"} />}
              w={"2rem"}
              h={"2.5rem"}
              rounded={"full"}
              bg={"transparent"}
              border={"1px solid hsl(223, 100%, 88%)"}
              _hover={{
                bg: "Blue",
                path: {
                  fill: "white",
                },
                circle: {
                  fill: "white",
                },
              }}
            />
          </Flex>
          {/* copyright text  */}
          <Text fontSize={"1rem"} color={"Gray"} mt={"2rem"}>
            &copy; Copyright Ping. All rights reserved.
          </Text>
        </Flex>

        {/* Modal  */}
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent w={["90%", "full"]}>
            <ModalBody rounded={"10px"} p={5} py={"4rem"} pos={"relative"}>
              <Flex direction={"column"} align={"center"} gap={5}>
                <Image src={gif} w={"12rem"} h={"12rem"} />
                <Text
                  fontSize={"1.1rem"}
                  fontWeight={"semiBold"}
                  textAlign={"center"}
                  color={"gray.500"}
                >
                  Thank you for Subscribing, we'll notify you about upcoming
                  events and activities on
                  <span style={{ whiteSpace: "nowrap" }}> {value}</span>
                </Text>
                <Button
                  leftIcon={<ArrowBackIcon />}
                  variant={"outline"}
                  border={"1px solid hsl(223, 100%, 88%)"}
                  _hover={{
                    bg: "FadeBlue",
                    color: "white",
                  }}
                  mt={8}
                  onClick={onClose}
                >
                  Go Back
                </Button>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}

export default App;
