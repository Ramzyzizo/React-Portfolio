import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../img/contact-img.svg";

const Contact = ()=>{
    const forminitialState ={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:'',
    }

    const [formDetails, setFormDetails ]=useState(forminitialState);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category:string, value:any)=>{
        setFormDetails({
          ...formDetails,
          [category]:value
        });
    }

    const handleSubmit = async(e:any)=>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact",{
          method: "POST",
          headers: {
            "Content-Type":"Application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        const result = await response.json();
        setFormDetails(forminitialState);
        if(result.code ===200){
          setStatus({success:true,message:'Your message sent successfully.'});
        }else{
          setStatus({success:false,message:'Something went wrong! .'});
        }

    }


    return (
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="Contact Us" />
            </Col>
            <Col md={6}>
              <h2>Get in touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col>
                    <textarea
                      rows={6}
                      placeholder="Message"
                      value={formDetails.message}
                      onChange={(e) => {
                        onFormUpdate("message", e.target.validationMessage);
                      }}
                    />
                    <button type="submit"><span>{buttonText}</span></button>
                  </Col>
                  {
                    status.message &&
                    <Col>
                        <p className={status.success===false ? "danger":"success" }>{status.message}</p>
                    </Col>
                  }
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Contact;