
import { useState } from "react";
import { Box, Button, VStack, Heading, Input, HStack, Text, SimpleGrid} from "@chakra-ui/react";

export default function Pessoas() {
    const [nome, setNome] = useState("");
    const [pessoas, setPessoas] = useState([]);

    const addPessoa = () => {
        if (!nome.trim()) return;
        const nova = { id: Date.now(), nome };
        setPessoas([...pessoas, nova]);
        setNome("");
    };

    return (
        <Box p={6}>
            <Heading mb={4}>Cadastro de Membros da Família</Heading>
            <HStack mb={4}>
                <Input
                    placeholder="Digite o nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </HStack>
            <Button colorScheme="teal" onClick={addPessoa}>
                Adicionar
            </Button>

            {pessoas.lenght === 0 ? (
                <Text>Nenhuma pesssoa cadastrada</Text>
            ) : (
                <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                    {pessoas.map((p) => (
                        <Box
                            key={p.id}
                            borderWidth={1}
                            borderRadius="lg"
                            p={4}
                            boxShadow="sm"
                        >
                            <Text fontWeight="bold">{p.nome}</Text>
                        </Box>
                    ))}
                </SimpleGrid>
            )}
        </Box>
    );
}