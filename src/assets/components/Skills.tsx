import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../img/meter1.svg';
import meter2 from '../img/meter2.svg';
import meter3 from '../img/meter3.svg';
import meter4 from '../img/meter4.svg';
import coloSharp from '../img/color-sharp.png';

function Sakills() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skills</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  <br/>
                  <br/>
                </p>
                <Carousel
                  responsive={responsive}
                  className="skill-slider"
                  infinite={true}
                >
                  <div className="item">
                    <img src={meter1} alt="image" />
                    <h5>Web Develop</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="image" />
                    <h5>First Website</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="image" />
                    <h5>My Frontend tutorial</h5>
                  </div>
                  <div className="item">
                    <img src={meter4} alt="image" />
                    <h5>My Backtend tutorial</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={coloSharp} />
      </section>
    );


}

export default Sakills;
