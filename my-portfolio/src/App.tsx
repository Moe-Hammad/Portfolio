import './App.css';
import Education from './Components/Education';
import Goal from './Components/Goal';
import Header from './Components/Header';
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

      <div className='centered-content'>
        <section className='header'>
          <Header></Header>
        </section>
        <section className='education'>
          <Education></Education>
        </section>
        <section className='skills'>
          <Skills></Skills>
        </section>
        <section className='workhistory'>
          <WorkHistory></WorkHistory>
        </section>
        <section className='projects'>
          <Projects></Projects>
        </section>
        <section className='timeline'>
          <Timeline></Timeline>
        </section>
        <section className='summary'>
          <Summary></Summary>
        </section>
        <section className='goal'>
          <Goal></Goal>
        </section>
      </div>
    </>
  );
}

export default App;