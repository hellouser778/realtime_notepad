import { Container, Box } from "@chakra-ui/react";
import Sidebar from "../component/utill/Sidebar";
const Dashboard = () => {
  return (
    <>
      <Container maxW="2xl" bg="blue.600" centerContent>
        <Box padding="4" bg="blue.400" color="black" maxW="md">
            <Sidebar/>
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
    </>
  );
};
export default Dashboard;
