import './App.css';
import Education from './Components/Education';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import NavbarComponent from './Components/Navbar';
import Skills from './Components/Skills';
import Summary from './Components/Summary';

function App() {
  return (
    <>
      <NavbarComponent />

      <div className='centered-content'>
        <section className='header'>
          <Header></Header>
        </section>
        <section className='introduction'>
          <Introduction />
        </section >
        <section className='summary'>
          <Summary></Summary>
        </section>
        <section className='education'>
          <Education></Education>
        </section>
        <section className='skills'>
          <Skills></Skills>
        </section>
      </div>
    </>
  );
}

export default App;