import './App.css';
import Education from './Components/Education';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import NavbarComponent from './Components/Navbar';
import Summary from './Components/Summary';

function App() {
  return (
    <>
      <NavbarComponent />

      <div className='centered-content'>
        <section>
          <Header></Header>
        </section>
        <section className='summary'>
          <Summary></Summary>
        </section>
        <section className='summary'>
          <Education></Education>
        </section>
        <section>
          <Introduction />
        </section >
      </div>
    </>
  );
}

export default App;