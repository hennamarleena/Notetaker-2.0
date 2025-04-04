import { useEffect } from "react";
import useStore from "./store/useStore";
import { NavLink } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {

  const location = useLocation();

  const courseList = useStore((state) => state.courseList);
  const checkIfCoursesListIsEmpty = useStore((state) => state.checkIfCoursesListIsEmpty);
  const createNotesViewDisabled = useStore((state) => state.createNotesViewDisabled);

  useEffect(() => {
    checkIfCoursesListIsEmpty(courseList);
  }, [courseList, checkIfCoursesListIsEmpty]);

  const data = [
    { icon: "/img/home-icon.png", label: "Home", path: "/home", pointerEvents: "" },
    { icon: "/img/add-note-icon.png", label: "Add notes", path: "/createnotes", pointerEvents: createNotesViewDisabled ? "none" : "auto" },
    { icon: "/img/list-square-bullet-icon.png", label: "View notes", path: "/listnotes", pointerEvents: "" },
    { icon: "/img/description-icon.png", label: "Add a new course", path: "/addcourses", pointerEvents: "" },
  ];

  return (
    <nav>
      {data.map((link, index) => (
        <NavLink
          key={link.path}
          component={Link}
          to={link.path}
          label={link.label}
          leftSection={<img src={link.icon} alt={link.label} width={30} style={{ paddingRight: "10px" }} />}
          active={location.pathname === link.path}
          styles={{
            root: {
              width: "100%",
              height: "70px",
              borderBottom: "1px solid #f0edff",
              backgroundColor: location.pathname === link.path ? "#E5DFFF" : "#FEFEFE",
              color: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "left",
              paddingLeft: "40px",
              pointerEvents: link.pointerEvents              
            },
          }}
        />
      ))}
    </nav>
  );
}
