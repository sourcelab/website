import React, { Component } from 'react'
import { Container, Row, Col, Parallax } from 'react-materialize'
import Navigation from './Navigation'
import Character from './Character'
import Hero from './Hero'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Hero>
          <h1>
            Let&apos;s use technology to <strong>wow</strong> customers
          </h1>
          <h1>
            Let&apos;s unlock the <strong>power</strong> of your data
          </h1>
          <h1>
            Let&apos;s <strong>jumpstart</strong> the development cycle
          </h1>
          <h1>
            Let&apos;s develop a viable <strong>project roadmap</strong>
          </h1>
          <h1>
            Let&apos;s turn <strong>ideas</strong> into prototypes
          </h1>
        </Hero>
        <section id="solutions" className="inverted skew">
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
                  <img
                    src="/images/home/icon-start.png"
                    alt="Test The Market"
                  />
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
                  <img
                    src="/images/home/icon-innovate.png"
                    alt="Move Products Forward"
                  />
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
                  <img
                    src="/images/home/icon-focus.png"
                    alt="Kickstart Project Progress"
                  />
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

        <section id="what">
          <Container>
            <Row>
              <Col s={12} m={12}>
                <h1>
                  Faster Software <strong>Innovation</strong>. Reliable{' '}
                  <strong>Results</strong>.
                </h1>
              </Col>
            </Row>
            <Row>
              <Col l={6}>
                <img
                  className="responsive-img"
                  src="/images/home/graphic-problem-solving.png"
                  alt="Exceptional Problem Solving"
                />
              </Col>
              <Col l={5} offset="l1">
                <h2 className="light">Exceptional Problem Solving</h2>
                <p>
                  There are so many technologies making up today’s enterprise.
                  We are highly skilled at{' '}
                  <strong>
                    successfully solving complex puzzles, blending new
                    technology
                  </strong>{' '}
                  with existing infrastructure, and{' '}
                  <strong>deriving value</strong> from vast amounts of data.
                </p>
                <div className="project">
                  <strong>Project: Gloo Assessment Engine</strong>
                  <p>
                    Gloo sought to revamp its assessment engine to leverage new
                    technologies in a legacy environment including flexible
                    micro-services, reliable serverless architecture and
                    interactive chatbots. Their management wanted proof of
                    concept.
                  </p>
                  <ul>
                    <li>Prototype developed in 2 weeks</li>
                    <li>Project was approved, making this feature popular.</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col l={5}>
                <h2 className="light">Focused on Your Business Goals</h2>
                <p>
                  Your business has budgets, schedules and objectives. You need
                  to please internal stakeholders as well as customers. We work
                  within these parameters to ensure projects deliver a{' '}
                  <strong>business win</strong> as well as a{' '}
                  <strong>technology wow</strong>, all while building your
                  business like it’s our own.{' '}
                </p>
                <div className="project">
                  <strong>Project: "Discover" Content Marketplace</strong>
                  <p>
                    Content discovery from a vast database of articles and
                    videos is a key selling feature of Gloo’s platform, but the
                    limited search capability was hindering adoption. SourceLab was
                    tasked to quickly create a content marketplace to
                    dramatically boost demand.{' '}
                  </p>
                  <ul>
                    <li>Completed 3x faster than expected</li>
                    <li>Content use increased 10x</li>
                  </ul>
                </div>
              </Col>
              <Col l={6} offset="l1">
                <img
                  className="responsive-img"
                  src="/images/home/graphic-goals.png"
                  alt="Focused on Your Business Goals"
                />
              </Col>
            </Row>
            <Row>
              <Col l={6} className="hide-on-small">
                <img
                  className="responsive-img"
                  src="/images/home/graphic-agile.png"
                  alt="Agile Technical &amp; Management Approach"
                />
              </Col>
              <Col l={5} offset="l1">
                <h2 className="light">
                  Agile Technical &amp; Management Approach
                </h2>
                <p>
                  Customers need flexibility in scaling resources and applying
                  specific types of expertise. We enable them to do things{' '}
                  <strong>quickly, and more creatively</strong> than other
                  companies.
                </p>
                <div className="project">
                  <strong>Envysion Trusted Partnership</strong>
                  <p>
                    Envysion sought a trusted, time efficient technical resource
                    to jumpstart or lead priority software projects. SourceLab
                    has been their go-to choice because of the team&apos;s
                    ability to respond quickly, supply the right skills and
                    solve complex problems.{' '}
                  </p>
                  <ul>
                    <li>
                      Envysion partnered with SourceLab as part of their
                      execution strategy
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="how">
          <Container>
            <Row>
              <Col m={8} s={12} offset="m2">
                <h1>
                  How We <strong>Innovate</strong>
                </h1>
                <p>
                  <strong>We have no technology bias</strong>, and no fear of
                  new technology. This frees us to experiment with emerging
                  solutions, melding old and new, and earning our reputation of
                  as a true solutions innovator.
                </p>
              </Col>
            </Row>
            <Row>
              <Col m={4} l={3} s={12} offset="m2 l3">
                <ul>
                  <li>Application Architecture </li>
                  <li>Custom Web Applications</li>
                  <li>Data Architecture and Migration</li>
                </ul>
              </Col>
              <Col m={4} l={3} s={12}>
                <ul>
                  <li>API Development</li>
                  <li>Software Integration</li>
                  <li>Project Consulting</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="tech">
          <Container>
            <Row>
              <Col l={3} m={4} s={12}>
                <h3>Some technologies we&apos;ve worked with</h3>
              </Col>
              <Col l={9} m={7} s={12} offset="m1">
                <ul>
                  <li>
                    <img src="/images/home/tech-go.png" alt="Go, Golang" />
                  </li>
                  <li>
                    <img src="/images/home/tech-nodejs.png" alt="NodeJS" />
                  </li>
                  <li>
                    <img src="/images/home/tech-rails.png" alt="Rails" />
                  </li>
                  <li>
                    <img src="/images/home/tech-react.png" alt="React" />
                  </li>
                  <li>
                    <img
                      src="/images/home/tech-aws.png"
                      alt="Amazon Web Services"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/home/tech-material.png"
                      alt="Material Design"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/home/tech-bootstrap.png"
                      alt="Bootstrap"
                    />
                  </li>
                  <li>
                    <img
                      src="/images/home/tech-angular.png"
                      alt="Angular, AngularJS"
                    />
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="who" className="inverted skewbottom">
          <Container>
            <Row>
              <Col l={3} m={4} s={12}>
                <h1>
                  Meet your <strong>Technologists</strong>
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
            <Row>
              <Col l={9} m={12} s={12} offset="l3">
                <Row id="characters">
                  <Col l={4} m={6} s={12}>
                    <Character
                      name="CJ Grimes"
                      pic="CJ"
                      title="Partner"
                      linkedin="https://www.linkedin.com/in/charlesgrimes"
                    />
                  </Col>
                  <Col l={4} m={6} s={12}>
                    <Character name="Matt Nery" pic="Matt" title="Partner" />
                  </Col>
                  <Col l={4} m={6} s={12}>
                    <Character
                      name="Nick Parker"
                      pic="Nick"
                      title="Partner"
                      linkedin="https://www.linkedin.com/in/nick-parker-070a3931"
                    />
                  </Col>
                  <Col l={4} m={6} s={12}>
                    <Character
                      name="Alan Baldwin"
                      pic="Alan"
                      title="Solution Architect"
                      linkedin="https://www.linkedin.com/in/abaldwinjr"
                    />
                  </Col>
                  <Col l={4} m={6} s={12}>
                    <Character
                      name="Scott Skender"
                      pic="Scott"
                      title="Solution Architect"
                      linkedin="https://www.linkedin.com/in/scottskender"
                    />
                  </Col>
                  <Col l={4} m={6} s={12}>
                    <Character
                      name="Ty Hyten"
                      pic="Ty"
                      title="Interface Genius"
                      linkedin="https://www.linkedin.com/in/tyhyten"
                    />
                  </Col>
                  <Col l={4} m={6} s={12}>
                    <Character
                      name="Chris Bedowitz`"
                      pic="Chris"
                      title="Software Developer"
                      linkedin="https://www.linkedin.com/in/chris-bedowitz-10879591"
                    />
                  </Col>
                </Row>
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
                <img src="/images/home/client-logo-gloo.png" alt="Gloo" />
              </Col>
              <Col s={6} m={4} l={2} className="client">
                <img src="/images/home/client-logo-sling.png" alt="SlingTV" />
              </Col>
              <Col s={12} m={4} l={3} className="client">
                <img
                  src="/images/home/client-logo-envysion.png"
                  alt="Envysion"
                />
              </Col>
              <Col s={12} m={6} l={3} className="client">
                <img
                  src="/images/home/client-logo-biocollective.png"
                  alt="The BioCollective"
                />
              </Col>
              <Col s={12} m={6} l={3} className="client">
                <img
                  src="/images/home/client-logo-janika.png"
                  alt="Janika Systems"
                />
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
                <p>
                  <strong>Email</strong>
                  <a href="mailto:hello@sourcelab.co">hello@sourcelab.co</a>
                </p>
                <p>
                  <strong>Phone</strong>
                  <a href="tel:+17209001179">+1 720.900.1179</a>
                </p>
                <p>
                  <strong>Visit</strong>
                  <address>
                    1810 Platte St.<br />
                    Denver, Co 80202
                  </address>
                  <a
                    href="https://www.google.com/maps/place/SourceLab/@39.7597164,-105.0047391,16z/data=!4m5!3m4!1s0x0:0x164d590ee0a13262!8m2!3d39.7595955!4d-105.0050497"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Map
                  </a>
                </p>
              </Col>
            </Row>
          </div>
          <footer>
            <span className="copyright">
              @{new Date().getFullYear()} SourceLab LLC. All rights reserved.
            </span>
          </footer>
        </section>
      </div>
    )
  }
}

export default App
