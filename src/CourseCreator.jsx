import { useState } from "react";
import useStore from "./store/useStore";
import { TextInput, Button, Title, Text } from '@mantine/core';

export default function CourseCreator() {

  const [newCourse, setNewCourse] = useState("");
  const [feedback, setFeedback] = useState("");
  const addCourse = useStore((state) => state.addCourse);
  const courseList = useStore((state) => state.courseList);

  const handleSave = () => {
    if (newCourse.trim().length === 0) return;

    const existingIDs = courseList.map(course => parseInt(course.id));
    const maxID = existingIDs.length > 0 ? Math.max(...existingIDs) : 0;
    const nextID = maxID + 1;

    const CourseObject = {
      id: nextID.toString(),
      name: newCourse.trim()
    };

    addCourse(CourseObject);
    setNewCourse("");
    setFeedback(`Course "${CourseObject.name}" was added successfully!`);
  };

  return (
    <div>
      <Title order={2} mb="lg">Add a new course</Title>

      <TextInput  
        radius="lg"
        size="xl"
        label="Course name:"
        placeholder="e.g. Introduction to React"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        required
        mb="lg"
      />
      
      <Button 
        variant="gradient"
        gradient={{ from: '#9580F2', to: '#a8a8f0', deg: 90 }}
        size="lg"
        radius="xl" 
        onClick={handleSave} 
        color="#9580F2"
        style={{
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Add course
      </Button>

      {feedback && (
        <Text mt="md" c="green" fw={500}>
          {feedback}
        </Text>
      )}
    </div>
  );
}
