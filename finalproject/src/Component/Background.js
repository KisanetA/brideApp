import React from "react";
import Particles from 'react-particles-js';
import './Background.css'

const particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

  class Background extends React.Component {
    render() {
        return (
            <div>

               <Particles
    params={particleOpt}
  />  
            </div>   
        )
  }
}
  export default Background;