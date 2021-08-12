import React, {Component} from 'react';
import Wave from 'react-wavify';
import MyPhoto from './my.jpeg';
import Typed from 'react-typed';
import Particles from 'react-particles-js'

class About extends Component {
    state = {};
    render () {
        return <div className="about-section" id="about">

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
           
          <Wave
        className="wave"
        paused={false}
        fill={"#A6A6A6"}
        options={{
          height: 20,
          amplitude: 75,
          speed: 0.1,
          points: 5
        
        
        }}
      />
        <span className="myphoto"> <img src={MyPhoto} width="200" height="200" id="me"  alt=""></img></span>
        <Typed
                style={{ textAlign: "center" }}
                className="typed-text1"
                strings={["About me"]}
                />

        <div className="about__me">
          <div className="about__Intro">
            Hi, I'm currently studying at the{" "}
            <i>Informal School of IT.</i> I have always been
            passionate about how the web works. I keep myself busy with new and
            exciting technologies and building new stuff with them. I'm from
            Cluj-Napoca and I'm also working as a <i>Public Aquisitions Expert.</i>
            During the weekends I work at my own company as a <i>DJ and event organizer.</i>
          </div>
        </div>
        <div className="about__filler" style={{ height: "17vh" }} />
      </div>
    
    }
}
export default About;