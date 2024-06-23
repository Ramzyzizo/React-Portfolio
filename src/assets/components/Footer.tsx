import { Col, Container, Row } from "react-bootstrap";
import logo from '../img/logo.svg';
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';
import navIcon3 from '../img/nav-icon3.svg';

export const Footer = ()=>{
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col sm={6} className="d-flex align-item-center row">
              <img src={logo} alt="logo" />
            </Col>
            <Col
              sm={6}
              className="d-flex align-item-center row text-sm-end"
            >
              <div className="social-icon text-end">
                <a href="">
                  <img src={navIcon1} />
                </a>
                <a href="">
                  <img src={navIcon2} />
                </a>
                <a href="">
                  <img src={navIcon3} />
                </a>
              </div>
              <p className="text-end">
                CopyRight 2024, All Right Resereveda Ramazotie
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}