import { Title, Text, Image } from "@mantine/core";

export default function HomeView() {
    return (
        <>
            <Title order={2} mb="xs">Let's get productive!</Title>
            <br />
            <Text mb="sm">
                This is a note-taking app where you can easily manage your course notes.
            </Text>
            <Text>
                Start by creating a new course or adding a note.
            </Text>

            <Image
            src="img/decorative-img.png"
            pt="50px"
            className="decorative-image"
            />

        </>
    );
}
