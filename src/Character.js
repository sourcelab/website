import React, { Component } from 'react'
import { Button, Carousel, Icon, Navbar, NavItem } from 'react-materialize'
import './Character.css'

class Character extends Component {
  render() {
    return (
      <div className="character card">
        <div className="card-image">
          <img src={`/images/home/${this.props.pic}.jpg`} />
          <a href={this.props.linkedin} target="_new">
            <span className="card-title">
              <span className="card-title-name">
                {this.props.name}
              </span>
              <span className="card-title-role">Partner</span>
            </span>
          </a>
        </div>
      </div>
    )
  }
}

export default Character
