import React, { Component } from 'react'
import {
  Button,
  Carousel,
  Container,
  Navbar,
  NavItem,
  Icon,
  Row,
  Col,
  Parallax
} from 'react-materialize'
import Navigation from './Navigation'
import Character from './Character'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Carousel options={{ fullWidth: false }}>
          <div>
            <h1>
              First <strong>Panel</strong>
            </h1>
          </div>
          <div>
            <h1>
              Second <strong>Panel</strong> is Here!
            </h1>
            <p className="white-text">This is your second panel</p>
          </div>
          <div>
            <h1>Third Panel</h1>
            <p className="white-text">This is your third panel</p>
          </div>
          <div>
            <h1>Fourth Panel</h1>
            <p className="white-text">This is your fourth panel</p>
          </div>
        </Carousel>

        <section className="inverted skew">
          <svg
            width="100%"
            height="100px"
            viewBox="0 0 100 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L 0,185 85,30 100,180 100,0 Z"
              vector-effect="non-scaling-stroke"
            />
          </svg>

          <Container>
            <Row>
              <Col m={12} l={6}>
                <h1>
                  We <strong>solve complex problems</strong> and build great
                  software.
                </h1>
              </Col>
              <Col m={12} l={6}>
                <p>
                  SourceLab is a group of highly experienced technologists and
                  solutions architects. We have a passion for solving difficult
                  problems with a focus on building business value.
                </p>
                <p>
                  Our diverse experience building companies and using lean
                  methodologies to launch innovative products inside of Fortune
                  500s, brings a range of expertise to your projects. Customers
                  love that we are fast, lean and live to bring their products
                  to market!
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="inverted nopad">
          <div className="maxwidth container">
            <Row className="services">
              <Col m={12} l={4} className="service-start">
                <Parallax
                  imageSrc="/images/home/start-bg.jpg"
                  className="background-image"
                />
                <div className="content">
                  <img src="/images/home/icon-start.png" />
                  <h4>Start</h4>
                  <h5>Test The Market</h5>
                  <p>
                    Have an idea, and want to turn it into a product? We are
                    enthusiastic partners ready to help you validate market
                    assumptions, craft an innovative approach and
                    cost-effectively bring your vision to life.
                  </p>
                </div>
              </Col>
              <Col m={12} l={4} className="service-innovate">
                <Parallax
                  imageSrc="/images/home/innovate-bg.jpg"
                  className="background-image"
                />
                <div className="content">
                  <img src="/images/home/icon-innovate.png" />
                  <h4>Innovate</h4>
                  <h5>Move Products Forward</h5>
                  <p>
                    Innovation within an organization can be slow. Our team
                    works with intrapreneurs to pair fresh ideas with the kind
                    of strong technology that wins buy-in and readies a product
                    for market quickly.
                  </p>
                </div>
              </Col>
              <Col m={12} l={4} className="service-focus">
                <Parallax
                  imageSrc="/images/home/focus-bg.jpg"
                  className="background-image"
                />
                <div className="content">
                  <img src="/images/home/icon-focus.png" />
                  <h4>Focus</h4>
                  <h5>Kickstart Project Progress</h5>
                  <p>
                    Too many distractions. No roadmap. The wrong skills. These
                    are the top reasons projects stall. Clients hire us to bring
                    a singular focus to priority projects, adding new expertise
                    and ideas along the way.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section>
          <Container>
            <Row>
              <Col s={12} m={12}>
                <h1>
                  Faster Software <strong>Innovation</strong>. Reliable{' '}
                  <strong>Results</strong>.
                </h1>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="who" className="inverted skewbottom">
          <Container>
            <Row>
              <Col l={3} m={4} s={12}>
                <h1>
                  Meet the <strong>Founders</strong>
                </h1>
              </Col>
              <Col l={5} m={7} s={12} offset="l2 m1">
                <p>
                  SourceLab partners are all software developers and
                  entrepreneurs. They have brought products to market for
                  companies of all sizes – startups to Fortune 500s
                </p>
              </Col>
            </Row>
            <Row id="characters">
              <Col l={3} offset="l3">
                <Character
                  name="CJ Grimes"
                  pic="focus-bg"
                  linkedin="https://www.linkedin.com/in/charlesgrimes"
                />
              </Col>
              <Col l={3}>
                <Character
                  name="Matt Nery"
                  pic="focus-bg"
                  linkedin="https://www.linkedin.com/in/mattnery"
                />
              </Col>
              <Col l={3}>
                <Character
                  name="Nick Parker"
                  pic="focus-bg"
                  linkedin="https://www.linkedin.com/in/nickparker"
                />
              </Col>
            </Row>
          </Container>
          <svg
            width="100%"
            height="150px"
            viewBox="0 0 100 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L 0,0 23,100 100,20 100,200 0,200 Z"
              vector-effect="non-scaling-stroke"
            />
          </svg>
        </section>

        <section>
          <div className="container">
            <Row>
              <Col offset="l1 s0">
                <h2 className="light">Some of our work</h2>
              </Col>
            </Row>
            <Row className="clients">
              <Col s={6} m={4} l={1} className="client">
                <img src="/images/home/client-logo-gloo.png" />
              </Col>
              <Col s={6} m={4} l={2} className="client">
                <img src="/images/home/client-logo-sling.png" />
              </Col>
              <Col s={12} m={4} l={3} className="client">
                <img src="/images/home/client-logo-envysion.png" />
              </Col>
              <Col s={12} m={6} l={3} className="client">
                <img src="/images/home/client-logo-biocollective.png" />
              </Col>
              <Col s={12} m={6} l={3} className="client">
                <img src="/images/home/client-logo-janika.png" />
              </Col>
            </Row>
          </div>
        </section>

        <section id="contact" className="inverted nopad">
          <div className="container maxwidth">
            <Row>
              <Col l={8} className="contact-container pad hide-on-med-and-down">
                <form />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Col>
              <Col m={0} l={4} className="pad">
                <h1>
                  Let&apos;s Work <strong>Together</strong>
                </h1>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    )
  }
}

export default App
