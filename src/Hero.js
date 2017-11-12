import React, { Component } from 'react'
import { Carousel } from 'react-materialize'
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div id="hero">
        <Carousel
          options={{ fullWidth: false, shift: -50, padding: 200, dist: -90 }}
        >
          {this.props.children.map(child => {
            return (
              <div>
                {child}
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default Hero
