import React, { Component } from 'react'
import './Character.css'

class Character extends Component {
  render() {
    return (
      <div className="character card">
        <div className="card-image">
          <img
            src={`/images/people/${this.props.pic}.jpg`}
            alt={this.props.name}
          />
          <a href={this.props.linkedin} target="_new">
            <span className="card-title">
              <span className="card-title-name">
                {this.props.name}
              </span>
              <span className="card-title-role">{this.props.title}</span>
            </span>
          </a>
        </div>
      </div>
    )
  }
}

export default Character
