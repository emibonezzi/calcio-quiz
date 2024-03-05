import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Outlet />
    </Box>
  );
};

export default Layout;
