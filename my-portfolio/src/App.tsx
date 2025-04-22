import './App.css';
import Education from './Components/Education';
import Goal from './Components/Goal';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import NavbarComponent from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Summary from './Components/Summary';
import Timeline from './Components/Timeline';
import WorkHistory from './Components/WorkHistory';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="centered-content">
        <section className="header">
          <Header />
        </section>
        <section className="header">
          <Introduction />
        </section>
        <section className="education">
          <Education />
        </section>
        <section className="skills">
          <Skills />
        </section>
        <section className="workhistory">
          <WorkHistory />
        </section>
        <section className="projects">
          <Projects />
        </section>
        <section className="timeline">
          <Timeline />
        </section>
        <section className="summary">
          <Summary />
        </section>
        <section className="goal">
          <Goal />
        </section>
      </div>
    </>
  );
}

export default App;