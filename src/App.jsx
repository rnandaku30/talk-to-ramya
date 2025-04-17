import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <MainLayout>
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills/>
    </MainLayout>
    
  );
}

export default App;
