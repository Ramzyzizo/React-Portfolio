import { useEffect, useState } from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../img/header-img.svg";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ["Web Developer",  "FrontEnd Developer" ,"BackEnd Developer"];
  const period =2000;
  const [delta, setDelta] = useState(300-Math.random()*100);
  useEffect(()=>{
    let ticker = setInterval(()=>{
      tick(); 
    },delta)
    return ()=>{clearInterval(ticker)};
  },[text])

  const tick =()=>{
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
  
    setText(updatedText);
    if(isDeleting){
      setDelta(prevDelta => prevDelta/2)
    }
    if(!isDeleting && updatedText === fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting && updatedText === ''){
      setIsDeleting(false);
      setLoopNum(loopNum+1);
      setDelta(200);
    }

  }


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portofolio</span>
            <h1>
              {`Hi, I'm Ramzy Saad `}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>I will take you in a trip of my career life.</p>
            <button onClick={() => console.log("clicked")}>
              {" "}
              <NavLink href="#contact">
                <span>Let's connect </span>
              </NavLink>
              <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Tag"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Banner;
