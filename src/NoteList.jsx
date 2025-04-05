import useStore from "./store/useStore";
import NoteItem from "./NoteItem";
import SelectCourseMenu from "./SelectCourseMenu";
import { Title, SimpleGrid, Text } from "@mantine/core";

export default function NoteList() {
    const filteredNotes = useStore((state) => state.filteredNotes);
    
    return (
        <>
            <Title order={2} mb="lg">View notes</Title>

            <Text mb="sm">Filter notes by course:</Text>
            <SelectCourseMenu enableFiltering={true}/>

            {filteredNotes.length > 0 ? (
              <SimpleGrid 
              cols={{ base: 1, sm: 1, md: 2, lg: 3 }} 
              spacing="lg"
              mt="xl"
            >
            {filteredNotes.map((note, i) => (
                <NoteItem key={note.id || i} note={note} />
            ))}
            </SimpleGrid>
            ) : (
                <Text mt="md" style={{paddingTop: "20px"}}>No notes found for the selected course.</Text>
            )}
        </>
    );
}