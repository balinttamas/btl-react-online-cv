import React, {Component} from 'react'
import './App1.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js'
import Navbar from "./navbar";
import Header from "./header";
import AboutPage from './about';
import ContactPage from './contact';
import StudiesPage  from './studies';


const App1 = ({ handleLogout }) => {

    return (
    
      <div className="App">
      
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: "circle",
            stroke: {
              width: 6,
              color: "white"
            }
          }
        }}
      />

      <Navbar>
      </Navbar>
      <Header />
      <AboutPage />
      <StudiesPage>
      </StudiesPage>
      <ContactPage />

      <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };



export default App1;
