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
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
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
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        //ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png").default}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png").default}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">Welcome to Kosmo Alien  <span>Space Club</span></h1>
                <h5 className="text-on-back">01</h5>
                
                <br></br><br></br><br></br>
                <p className="profile-description">
               Kozmos Alien is a collection of 8,888 aliens 
                 with  lightspeed hyperspace technology.  Each one is equipped 
                  with armor, weapons, masks, accessories, and special powers .  
                    Owning any one of our NFTs grants club membership. 
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
              <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/chester-wade.jpg").default}
          />
              </Col>
            </Row>
          </Container>
        </div>

        
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6">
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">Rarity</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description text-left">
                All 8,888 <span>Kozmo</span> Alienss
                 are unique, there is no one like another. Each Alien is randomly generated with its own characteristics and expressions
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        

        <div classname="black">______________________________________________________________________________________________________________________________________________________________________
</div>
        <section className="section">
          <Container>
            <Row>
              <Col  md="7" >
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input defaultValue="Mike" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="mike@email.com" type="email" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input defaultValue="001-12321345" type="text" />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input defaultValue="CreativeTim" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
             
              <Col className="ml-auto mr-auto card-mint" md="5">
                <Card className="card-coin card-plain " style={{width:'33rem'}}>
                  <CardHeader>
                  
                    <h4 className="mint-head">Count you count</h4>
                    <h4 className="mint-title">Enter the Amount of Aliens You would like to buy</h4>
                  </CardHeader>

                  {/* card body */}

                  <CardBody>
                  <Row>
                        <Col md='4'>
                        <img
                        alt="..."
                        className="img-fluid m-4" style={{width:'100px'}}
                        src={require("assets/img/mike.jpg").default}
                      />
                        </Col>
                        <Col md='8'>
                          <h6 class='price-h'>Price per alien</h6>
                          <h6 class='price-n'><span class='red-price'>0.08 </span>Eth Each</h6>
                          <h6 class='price-h'>0 remaining</h6>

                        </Col>
                      </Row>

                      <div class="form-div">
                          <input class='onum' defaultValue="1" type="text" />
                          <span class="omax">0 max</span>
                      </div>

                      <div class='hline'></div>

                      <div class='ta-div'>
                        <h6 class='totalh'>Total</h6>
                        <h6 class='totala'>0.08 ETH</h6>
                      </div>

                      <div class='hline'></div>

                    
                    <Button
                            className="btn btn-mint mx-auto m-3"
                            color="primary"
                            type="submit"
                            style={{width:"100%"}}
                            disabled
                          >
                          Mint
                          </Button>
                  </CardBody>

                    
                </Card>
              </Col>
            </Row>
          </Container>
            
        </section>



        <section className="section" id="crap-roadmap">

        <Container>
          <Row>
          
            <Col md="7">
              <Row>
                <Col sm="2">
                  <span class='pointz-num'>1</span>
                </Col>
                <Col sm="10">
                  <span class='pointz-des'>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</span>
                </Col>
              </Row>

              <div class='vline'></div>

              <Row>
                <Col sm="2">
                  <span class='pointz-num'>2</span>
                </Col>
                <Col sm="10">
                  <span class='pointz-des'>Shoober shooberino adorable doggo many pats, heckin good boys many pats pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow very biscit.</span>
                </Col>
              </Row>

              <div class='vline'></div>

              <Row>
                <Col sm="2">
                  <span class='pointz-num'>3</span>
                </Col>
                <Col sm="10">
                  <span class='pointz-des'>Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for pats big ol, he made many woofs doing me a frighten puggo wow very biscit, ruff fat boi ruff long doggo.</span>
                </Col>
              </Row>

              <div class='vline'></div>

              <Row>
                <Col sm="2">
                  <span class='pointz-num'>4</span>
                </Col>
                <Col sm="10">
                  <span class='pointz-des'>Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats snoot. I am bekom fat ur givin me a spook length boy wow very biscit very good spot.</span>
                </Col>
              </Row>

              <div class='vline'></div>

              <Row>
                <Col sm="2">
                  <span class='pointz-num'>5</span>
                </Col>
                <Col sm="10">
                  <span class='pointz-des'>Dogi ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</span>
                </Col>
              </Row>
              </Col>

            <Col md="5">
              <h1 className="roadmap-text">Roadmap Activations</h1>
            </Col>
            
          </Row>
        </Container>
       
        </section>


        <Footer />
      </div>
    </>
  );
}
