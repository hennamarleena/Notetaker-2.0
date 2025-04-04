import useStore from "./store/useStore";
import { Card, Button, Flex, Text, Box, Title } from "@mantine/core";

export default function NoteItem( {note} ) {
    
    const deleteNote = useStore((state) => state.deleteNote);
    const clickHandler = () => {
        deleteNote(note)
    }
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }
    
    return(
        <Card
        style={{
            border: "1px solid #E5DFFF",
        }}
        shadow="md"
        padding="xl"
        radius="lg"
        mt="20px"
        >
        <Flex direction={{ base: 'column', sm: 'row' }} justify="space-between" align="start" gap="md">


        <Box>
            <Text size="sm" c="dimmed">
                {formatDate(note.timestamp)}
            </Text>
            <Text fw={600} size="lg" mb="xs">
                {note.course.name || "Unknown Course"}
            </Text>
            <Text size="md" lh={1.6}>
                {note.text || "No content available."}
            </Text>
        </Box>
        
        <Button
            variant="outline"
            color="red"
            size="sm"
            onClick={clickHandler}
            radius="xl"
            >
            Delete
        </Button>
        </Flex>
        </Card>   
    )
}