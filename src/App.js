import './App.css';
import Layout from './component/Layout/Layout';
import Contact from './pages/Contact/Contact';
import Education from './pages/Educations/Education';
import Project from './pages/Project/Project';
import Techstack from './pages/Techstack/Techstack';
import About from './pages/about/About';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import MobileNav from './component/MobileNav/MobileNav';


function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav/>
        <Layout />

        <About />

        <Education />

        <Techstack />

        <Project />

        <Contact />
      </div>
      <ScrollToTop
        smooth={true}
        style={{ backgroundColor: "grey", borderRadius: "70px" }}
      />
    </>
  );
}

export default App;
