import {  Flex,  VStack, Heading } from "@chakra-ui/react";
import Sidebar from "../component/utill/Sidebar/Sidebar";
import Header  from'../component/utill/Header/Header';
import Footer  from'../component/utill/Footer/Footer';
const Maindashboard = () => {
  return (
    <Flex>
      <div className="w-1/4">
        <Sidebar />
      </div>
      <VStack className="w-3/4" zIndex={10000}>
        <Header />
        <VStack padding={5} width="full">
          <Heading w="full" textAlign={"left"} fontSize={20}>
            View reports
          </Heading>
        </VStack>
      </VStack>
      <Footer/>
      
    </Flex>
  );
};
export default Maindashboard;
