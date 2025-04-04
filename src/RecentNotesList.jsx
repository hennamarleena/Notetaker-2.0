import useStore from "./store/useStore";
import { Card, SimpleGrid } from "@mantine/core";
import { useEffect } from "react";

export default function RecentNotesList() {

const recentNotes = useStore((state) => state.recentNotes);
const clearRecentNotes = useStore((state) => state.clearRecentNotes);


useEffect(() => {
    return () => {
      clearRecentNotes();
    };
  }, [clearRecentNotes]);
 
    return (
        <>
        <SimpleGrid 
              cols={{ base: 1, sm: 1, md: 2 }} 
              spacing="sm"
              mt="sm"
              mb="20px"

              verticalSpacing="xs"
            >
            {recentNotes.map( (note, i) => (
                <Card 
                    key={i} 
                    shadow="sm" 
                    radius="lg" 
                    withBorder 
                    mb="10px"
                    pb="40px"
                    pt="40px"> 
                    {note.text} 
                </Card>
            ))}
            </SimpleGrid>
        </>
    )
}