import CreateNotesView from './views/CreateNotesView';
import ListNotesView from './views/ListNotesView';
import AddCoursesView from './views/AddCoursesView';
import HomeView from './views/HomeView';
import { Routes, Route, Outlet } from "react-router-dom";
import useStore from './store/useStore';
import './index.css';
import '@mantine/core/styles.css';
import { Container } from '@mantine/core';
import Nav from './nav.jsx';

function App() {
  const fetchCourses = useStore((state) => state.fetchCourses);
  const fetchNotes = useStore((state) => state.fetchNotes);

  fetchNotes();
  fetchCourses();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="home" element={<HomeView />} />
        <Route path="createnotes" element={<CreateNotesView />} />
        <Route path="listnotes" element={<ListNotesView />} />
        <Route path="addcourses" element={<AddCoursesView />} />
      </Route>
    </Routes>
  );
}

function Layout() {

  return (
    <div>
      <header>
      <h1>NoteTaker</h1>
      <h2>Your study notes, all in one place</h2>
    </header>

      <div className='main-content-flex'>
        <div className='nav-container'>
          <Nav/>
        </div>
        <Container size="xl">
          <Outlet />
        </Container>
      </div>
      
    </div>
  );
}



export default App;
