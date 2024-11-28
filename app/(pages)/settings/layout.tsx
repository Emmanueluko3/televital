"use client";
import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import SideNav from "@/components/sideNav";

const MotionBox = motion(Box);

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex minH="100vh" className="p-16">
      <Box
        as="nav"
        w={{ base: "full", md: "250px" }}
        bg="white"
        boxShadow="md"
        p="5"
        className="mr-16"
      >
        <SideNav />
      </Box>

      <Box flex="1" maxW="1027px" mx="auto" p={{ base: "5", lg: "8" }}>
        <AnimatePresence>
          <MotionBox
            key={Math.random()}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
          >
            {children}
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Flex>
  );
}
