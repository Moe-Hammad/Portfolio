import './App.css'
import NavbarComponent from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavbarComponent />

      <section>
        <div className="card">
          <div style={{ width: '150px' }}>
            <img
              src="src/assets/mo_pic.jpg"
              className="card-img-top img-fluid"
              alt="Mohammad Hammad"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Mohammad Hammad</h5>
            <p className="card-text">
              Willkommen auf meiner Profilseite.
            </p>
            <a href="https://www.linkedin.com/in/mohammad-hammad-5b900b352/" className="btn btn-primary">
              <img className='profilepic' src="src/assets/LI-Logo.png" alt="LinkedIn Logo" style={{ width: 'auto', height: '20px', }} />
            </a>
          </div>
        </div>
      </section >

      <section className="cardcontent">
        <div>
          <h2>Introduction</h2>
        </div>
      </section>
    </>
  );
}

export default App