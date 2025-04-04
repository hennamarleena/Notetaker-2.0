import { useState } from 'react';
import useStore from './store/useStore';
import SelectCourseMenu from './SelectCourseMenu';
import { Textarea, Button, Title, Box, Text } from '@mantine/core';

export default function NoteCreator() {
  const [noteText, setNoteText] = useState("");
  const [selectedCourse, setSelectedCourse] = useState({ id: "", name: "" });
  const [disablingCourseMenu, setDisablingCourseMenu] = useState(false);
  const [sessionLocked, setSessionLocked] = useState(false);
  const noteList = useStore((state) => state.noteList);
  const addNote = useStore((state) => state.addNote);
  const addRecentNote = useStore((state) => state.addRecentNote);
  const [error, setError] = useState("");

const clearRecentNotes = useStore((state) => state.clearRecentNotes);
  

  const handleSave = () => {
    if (noteText.length === 0 || selectedCourse.id === "") {
      setError("Please select a course and write a note.");
      return;
    }
    setError("");

    const lastNote = noteList.length > 0 ? noteList[noteList.length - 1] : { id: -1 };

    const NoteObject = {
      id: lastNote.id + 1,
      text: noteText,
      course: {
        id: selectedCourse.id,
        name: selectedCourse.name,
      },
      timestamp: new Date(),
    };
    addNote(NoteObject);
    addRecentNote(NoteObject);
    setNoteText("");
    setDisablingCourseMenu(true);
    setSessionLocked(true);
  };

  const handleNewSession = () => {
    setSessionLocked(false);
    setDisablingCourseMenu(false);
    clearRecentNotes();
  };

  return (
    <Box>
      <Title order={2} mb="lg">Add notes</Title>

      <Text mb="lg">
        Select a course and write down your note below.
      </Text>

      <SelectCourseMenu
        onSelect={setSelectedCourse}
        isDisabled={disablingCourseMenu}
        changeOptionLabel="Select a course:"
        required
      />

      {error && <Text c="red" mt="sm">{error}</Text>}

      <Textarea
        size="xl"
        radius="lg"
        label="Write a note:"
        type="text"
        value={noteText}
        placeholder="e.g. Newton's Second Law: F = ma"
        onChange={(e) => setNoteText(e.target.value)}
        pt="xl"
        pb="lg"
        required
        autosize
        minRows={10}
      />

      <Button
        variant="gradient"
        gradient={{ from: '#9580F2', to: '#a8a8f0', deg: 90 }}
        size="lg"
        radius="xl"
        onClick={handleSave}
        style={{
          color: 'white',
          fontWeight: 600,
          boxShadow: '0 4px 10px rgba(149, 128, 242, 0.3)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Save note
      </Button>

      {sessionLocked && (
        <Text mt="xl" c="dimmed" size="lg">
          The course selection is now locked. Click below to start a new session and add new notes for another course.
        </Text>
      )}

      {sessionLocked && (
        <Box>
          <Button
          variant="outline"
          color="blue"
          size="sm"
          radius="xl"
          mt="sm"
          mb="xl"
          onClick={handleNewSession}
        >
          Start new session
        </Button>
        <Title order={4}>New notes for {selectedCourse.name}:</Title>
        </Box>
      )}
    </Box>
  );
}
