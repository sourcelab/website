import React, { Component } from 'react'
import { Button, Carousel, Icon, Navbar, NavItem } from 'react-materialize'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className="secondary z-depth-0 hide-on-med-and-down">
          <ul>
            <li className="phone">
              <a>720.900.1179</a>
            </li>
            <li className="chat">
              <a href="www.google.com">
                <Icon>chat</Icon>
                Chat Now
              </a>
            </li>
          </ul>
        </nav>
        <Navbar
          brand=""
          className="z-depth-0 primary"
          options={{ edge: 'right' }}
        >
          <NavItem href="#solutions">Solutions</NavItem>
          <NavItem href="#what">What We Do</NavItem>
          <NavItem href="#who">Who We Are</NavItem>
          <NavItem href="#contact">Contact Us</NavItem>
        </Navbar>
      </header>
    )
  }
}

export default Navigation
