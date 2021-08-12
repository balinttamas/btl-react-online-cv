import React, { Component } from "react";
import Wave from "react-wavify";
import CardList from "./cardlist";
import Typed from "react-typed";
import "./progressbar.css";
import logoHTML from "./html.png";
import logoCSS from "./css.png";
import logoJS from "./js.png";
import logoREACT from "./react.png";
import logoANGULAR from "./ang.png";

class Studies extends Component {
  state = {};
  render() {
    return (
      <div className="studies-section" id="studies">
        <Wave
          className="wave1"
          paused={false}
          fill={"#8C8C8C"}
          options={{
            height: 20,
            amplitude: 75,
            speed: 0.1,
            points: 5,
          }}
        />

        <Typed
          style={{ textAlign: "center", paddingTop: "5rem" }}
          className="typed-text1"
          strings={["Studies"]}
        />
        <div className="App">
          <CardList />
        </div>

        <Typed
          style={{ textAlign: "center", paddingTop: "5rem" }}
          className="typed-text1"
          strings={["Skills"]}
        />

        <table className="progcont">
          <ul id="ulid">
            <li className="html5" id="liid">
              <span>
                <img src={logoHTML} width="8%" height="8%" alt=""></img>
              </span>
              <span class="htmlText slide">HTML</span>
            </li>
            <li className="css3" id="liid">
              <span>
                <img
                  src={logoCSS}
                  width="5.5%"
                  height="5.5%"
                  className="proplog"
                  alt=""
                ></img>
              </span>
              <span class="cssText slide">CSS</span>
            </li>
            <li className="js" id="liid">
              <span>
                <img
                  src={logoJS}
                  width="5.5%"
                  height="5.5%"
                  className="proplog"
                  alt=""
                ></img>
              </span>
              <span class="jsText slide">JavaScript</span>
            </li>
            <li className="react" id="liid">
              <span>
                <img src={logoREACT} width="9%" height="10%" alt=""></img>
              </span>
              <span class="reactText slide">ReactJS</span>
            </li>
            <li className="sketch" id="liid">
              <span>
                <img
                  src={logoANGULAR}
                  width="7%"
                  height="8%"
                  className="proplog"
                  alt=""
                ></img>
              </span>
              <span class="angularText slide">Angular</span>
            </li>
          </ul>
        </table>
      </div>
    );
  }
}
export default Studies;
