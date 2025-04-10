import './App.css'
import NavbarComponent from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavbarComponent />

      <section>
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
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