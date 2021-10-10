/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.sm)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'

import { fadeIn } from 'react-animations'
import classnames from 'classnames'
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'
import StarfieldAnimation from 'react-starfield-animation'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from 'reactstrap'

// css
import './style.css'

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import Footer from 'components/Footer/Footer.js'

const carouselItems = [
  {
    src: require('assets/img/denys.jpg').default,
    altText: 'Slide 1',
    caption: 'Big City Life, United States'
  },
  {
    src: require('assets/img/fabien-bazanegue.jpg').default,
    altText: 'Slide 2',
    caption: 'Somewhere Beyond, United States'
  },
  {
    src: require('assets/img/mark-finn.jpg').default,
    altText: 'Slide 3',
    caption: 'Stocks, United States'
  }
]

let ps = null

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1)
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on'
      document.documentElement.classList.remove('perfect-scrollbar-off')
      let tables = document.querySelectorAll('.table-responsive')
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i])
      }
    }
    document.body.classList.toggle('profile-page')
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        //ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off'
        document.documentElement.classList.remove('perfect-scrollbar-on')
      }
      document.body.classList.toggle('profile-page')
    }
  }, [])
  return (
    <>
      <ExamplesNavbar />
      <div className='wrapper'>
        <div className='page-header'>
          <img
            alt='...'
            className='dots'
            src={require('assets/img/dots.png').default}
          />
          <img
            alt='...'
            className='path'
            src={require('assets/img/path4.png').default}
          />
          <Container className='align-items-center'>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            />
            <Row>
              <Col lg='6 order-2 order-lg-0' md='6 order-2 order-lg-0'>
                <h1 className='profile-title text-left'>
                  Welcome to Kosmo Alien <span>Space Club</span>
                </h1>
                <h5 className='text-on-back'>01</h5>

                <br></br>
                <br></br>
                <br></br>
                <p className='profile-description'>
                  Kozmos Alien is a collection of 8,888 aliens with lightspeed
                  hyperspace technology. Each one is equipped with armor,
                  weapons, masks, accessories, and special powers . Owning any
                  one of our NFTs grants club membership.
                </p>

                <div className='btn-wrapper profile pt-3'>
                  <Button
                    className='btn-icon btn-round'
                    color='twitter'
                    href='https://twitter.com/creativetim'
                    id='tooltip639225725'
                    target='_blank'
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip639225725'>
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='facebook'
                    href='https://www.facebook.com/creativetim'
                    id='tooltip982846143'
                    target='_blank'
                  >
                    <i className='fab fa-instagram' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip982846143'>
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='dribbble'
                    href='https://dribbble.com/creativetim'
                    id='tooltip951161185'
                    target='_blank'
                  >
                    <i className='fab fa-discord' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip951161185'>
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className='ml-auto mr-auto' lg='4' md='6'>
                <img
                  alt='...'
                  className='shapes circle'
                  src={require('assets/img/chester-wade.jpg').default}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div id='sections' style={{ backgroundcolor: 'red' }}>
          <Container>
            <Row className='justify-content-between'>
              <Col md='6'>
                <Row className='justify-content-between align-items-center'>
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md='5'>
                <h1 className='profile-title text-left'>Rarity</h1>
                <h5 className='text-on-back'>02</h5>
                <p className='profile-description text-left'>
                  All 8,888 <span>Kozmo</span> Alienss are unique, there is no
                  one like another. Each Alien is randomly generated with its
                  own characteristics and expressions
                </p>
                <div className='btn-wrapper pt-3 d-inline-block'>
                  <Button
                    className='btn-simple'
                    color='primary'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='tim-icons icon-book-bookmark' /> Bookmark
                  </Button>
                  <Button
                    className='btn-simple'
                    color='info'
                    href='#pablo'
                    onClick={e => e.preventDefault()}
                  >
                    <i className='tim-icons icon-bulb-63' /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className='section'>
          <Container>
            <Row>
              <Col lg='6' className='d-flex justify-content-center  text-left'>
                <div id="j" style={{marginleft:"20px"}}>
                  <div class='neon'>Join The</div>
                  <div class='flux'>Kosmos</div>
                </div>
              </Col>

              <Col className='ml-auto mr-auto card-mint' lg='6'>
                <Card
                  className='card-coin card-plain '
                  style={{ background: '#9e7599' }}
                >
                  <CardHeader>
                    <h4 className='mint-head'>Count you count</h4>
                    <h4 className='mint-title'>
                      Enter the Amount of Aliens You would like to buy
                    </h4>
                  </CardHeader>

                  {/* card body */}

                  <CardBody>
                    <div className='rf-card-desktop'>
                      <Row>
                        <Col md='4'>
                          <img
                            alt='...'
                            className='img-fluid m-4'
                            style={{ width: '100px' }}
                            src={require('assets/img/41.jpg').default}
                          />
                        </Col>
                        <Col md='8'>
                          <h6 class='price-h'>Price per alien</h6>
                          <h6 class='price-n'>
                            <span>0.08 </span>Eth Each
                          </h6>
                          <h6 class='price-h'>9,999 remaining</h6>
                        </Col>
                      </Row>
                    </div>
                    <div className='rf-card-mobile rf-card-row'>
                      <div className='rf-card-imgbx'>
                        <img
                          alt='...'
                          className='img-fluid m-4'
                          id="fw"
                          style={{ width: '100px' }}
                          src={require('assets/img/41.jpg').default}
                        />
                      </div>
                      <div>
                        <h6 class='price-h'>Price per alien</h6>
                        <h6 class='price-n'>
                          <span>0.08 </span>Eth Each
                        </h6>
                        <h6 class='price-h'>9,999 remaining</h6>
                      </div>
                    </div>
                    <div class='form-div'>
                      <input class='onum' defaultValue='1' type='text' />
                    </div>

                    <div class='hline'></div>

                    <div class='ta-div'>
                      <h6 class='totalh'>Total</h6>
                      <h6 class='totala'>0.08 ETH</h6>
                    </div>

                    <div class='hline'></div>

                    <Button
                      className='btn btn-mint mx-auto m-3'
                      color='primary'
                      type='submit'
                      style={{ width: '100%' }}
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='section' id='crap-roadmap'>
          <Container>
            <Row>
              <Col md='7 order-2 order-lg-0'>
                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>1</span>
                  </Col>
                  <Col sm='10'>
                    <span class='pointz-des'>
                      Doggo ipsum long bois lotsa pats blep. What a nice floof
                      ruff super chub very good spot, the neighborhood pupper
                      lotsa pats. Borkdrive shibe shoober what a nice floof,
                      borking doggo.
                    </span>
                  </Col>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>2</span>
                  </Col>
                  <Col sm='10'>
                    <span class='pointz-des'>
                      Shoober shooberino adorable doggo many pats, heckin good
                      boys many pats pupper wrinkler, corgo maximum borkdrive. A
                      frighten puggo wow very biscit.
                    </span>
                  </Col>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>3</span>
                  </Col>
                  <Col sm='10'>
                    <span class='pointz-des'>
                      Big ol h*ck adorable doggo vvv smol borking doggo with a
                      long snoot for pats big ol, he made many woofs doing me a
                      frighten puggo wow very biscit, ruff fat boi ruff long
                      doggo.
                    </span>
                  </Col>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>4</span>
                  </Col>
                  <Col sm='10'>
                    <span class='pointz-des'>
                      Long bois mlem I am bekom fat wrinkler puggo maximum
                      borkdrive big ol pupper I am bekom fat, fluffer vvv
                      adorable doggo lotsa pats snoot. I am bekom fat ur givin
                      me a spook length boy wow very biscit very good spot.
                    </span>
                  </Col>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>5</span>
                  </Col>
                  <Col sm='10'>
                    <span class='pointz-des'>
                      Dogi ipsum long bois lotsa pats blep. What a nice floof
                      ruff super chub very good spot, the neighborhood pupper
                      lotsa pats. Borkdrive shibe shoober what a nice floof,
                      borking doggo.
                    </span>
                  </Col>
                </Row>
              </Col>

              <Col md='5'>
                <h1 className='roadmap-text'>Roadmap Activations</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <div class='container22'>
          <div class='container'>
            <h1 className='team-text'> The Team </h1>
            <div class='team'>
              <div class='member'>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                  alt='member_image'
                />
                <h4>John Doe</h4>
                <span>doe@gmail.com</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.amet
                  consecteturamet consecteturamet Laboriosam voluptatum fuga
                  iure. Est, dicta voluptatum.
                </p>
                <div class='btn'>
                  <a href='#'>follow</a>
                </div>
              </div>
              <div class='member'>
                <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' />
                <h4>John Doe</h4>
                <span>doe@gmail.com</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.amet
                  consecteturamet consecteturamet Laboriosam voluptatum fuga
                  iure. Est, dicta voluptatum.
                </p>
                <div class='btn'>
                  <a href='#'>follow</a>
                </div>
              </div>
              <div class='member'>
                <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' />

                <h4>John Doe</h4>

                <span>doe@gmail.com</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.amet
                  consecteturamet consecteturamet Laboriosam voluptatum fuga
                  iure. Est, dicta voluptatum.
                </p>
                <div class='btn'>
                  <a href='#'>follow</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
