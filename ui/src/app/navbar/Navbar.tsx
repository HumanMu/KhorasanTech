import {
  Box,
  Flex,
  Image,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import { DesktopNav } from "./computer/Computer";
import { MobileNav } from "./mobile/Mobile";
import LoginLogo from "./../../assets/WebIcon2.png";


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} w="100%" zIndex="10" >
      <Flex
        {...FlexParent}
        bg={useColorModeValue("black", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        borderColor={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex {...FlexIcon}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src={LoginLogo} {...NavbarLogo} />
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack {...AccessButtons}>
          <Button {...SignInButton}> Sign In </Button>
          <Button {...SignUpButton}> Sign Up </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const NavbarLogo = {
  alt: "Login Logo",
  maxW: "30px",
  maxH: "30px",
};

const AccessButtons = {
  flex: { base: 1, md: 0 },
  justify: "flex-end",
  direction: "row" as const,
  spacing: "6",
};
const SignInButton = {
  as: "a" as const,
  fontSize: "sm",
  fontWeight: "400",
  variant: "link",
  href: "/login",
};

const SignUpButton = {
  as: "a" as const,
  display: { base: "none", md: "inline-flex" },
  fontSize: "sm" as const,
  fontWeight: "600" as const,
  color: "white" as const,
  bg: "#db3e00" as const,
  _hover: { bg: "#81b182" } as const,
  href: "/register",
};
/*const Signout = {
  as: "a" as const,
  display: { base: "none", md: "inline-flex" },
  fontSize: "sm",
  fontWeight: "600",
  color: "white",
  bg: "#db3e00",
  _hover: { bg: "#81b182" } as const,
};*/

const FlexParent = {
  minH: "60px",
  borderBottom: "1",
  borderStyle: "solid",
  align: "center",
  py: { base: 2 },
  px: { base: 6 },
  margin: "0px",
};
const FlexIcon = {
  flex: { base: 1, md: "auto" },
  ml: { base: -2 },
  display: { base: "flex", md: "none" },
};
