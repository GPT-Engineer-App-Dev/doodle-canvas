import { Container, Text, VStack, Box, Flex, Spacer, IconButton, useBreakpointValue, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useEvents } from "../integrations/supabase/index.js";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { data: events, error, isLoading } = useEvents();

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
          {isLoading && <Spinner />}
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error.message}
            </Alert>
          )}
          {events && events.map(event => (
            <Box key={event.id} p={4} shadow="md" borderWidth="1px">
              <Text>{event.name}</Text>
              <Text>{event.description}</Text>
              <Text>{event.date}</Text>
              <Text>{event.venue?.name}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;