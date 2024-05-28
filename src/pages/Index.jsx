import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">My App</Text>
        <Spacer />
        {isMobile ? (
          <IconButton aria-label="Menu" icon={<FaBars />} />
        ) : (
          <Box>
            <Text as="a" href="#" p={2}>Home</Text>
            <Text as="a" href="#" p={2}>About</Text>
            <Text as="a" href="#" p={2}>Contact</Text>
          </Box>
        )}
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;