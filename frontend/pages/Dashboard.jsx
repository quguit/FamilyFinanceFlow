
import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    nav("/");
  };

  return (
    <Box p={6}>
      <Heading mb={4}>Dashboard</Heading>
      <Button onClick={handleLogout} colorScheme="red">Sair</Button>
    </Box>
  );
}
