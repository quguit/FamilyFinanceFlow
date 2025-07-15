
import { useState } from "react";
import { Box, Input, Button, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("userId", username);
      nav("/dashboard");
    } else {
      alert("Informe um nome!");
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={20} p={6} borderWidth={1} borderRadius="lg">
      <Heading mb={6} textAlign="center">FamilyFinanceFlow</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Nome de usuário"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Button colorScheme="blue" w="full" onClick={handleLogin}>
          Entrar
        </Button>
      </VStack>
    </Box>
  );
}
