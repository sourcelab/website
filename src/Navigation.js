import React, { Component } from 'react'
import { Icon, Navbar, NavItem } from 'react-materialize'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className="secondary z-depth-0 hide-on-med-and-down">
          <ul>
            <li className="phone">
              <a href="tel:+17209001179">+1 720.900.1179</a>
            </li>
            <li className="chat">
              <a href="mailto:hello@sourcelab.co">
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
          <NavItem href="#solutions">
            <strong>Solutions</strong>
          </NavItem>
          <NavItem href="#what">What We Do</NavItem>
          <NavItem href="#who">Who We Are</NavItem>
          <NavItem href="#contact">Contact Us</NavItem>
        </Navbar>
      </header>
    )
  }
}

export default Navigation
