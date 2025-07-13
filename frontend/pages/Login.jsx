
import { useState } from "react";
import { Box, Input, Button, Heanding, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const nav = useNavigate();

    const handleLogin = () => {
        if (username) {
            localStorage.setItem("userId", username);
            nav("/dashboard");
        } else {
            alert("Please enter a username");
        }
    };

    return (
        <Box maxw="sm" mx="auto" mt="{20" p={6} borderwidth={1} borderRadius="lg">
            <Heanding mb={6} textAlign="center">
                Family Finance Flow
            </Heanding>
            <VStack spacing={4}>
                <Input
                    placeholder="Nome para login"
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