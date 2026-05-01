import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { Button } from "./Button";
import { welcome } from "../services/welcome";

export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Header />
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" marginTop='10px' />
          <Input placeholder="password" marginTop='10px' />
          <Center>
            <Button onClick={welcome}>
              Entrar
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}