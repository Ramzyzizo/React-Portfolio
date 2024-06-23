import NavBar from "./assets/components/NavBar";
import Banner from "./assets/components/Banner";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import {Footer} from "./assets/components/Footer";

let items = ["Home", "About Us", "Blogs", "Contact Us"];

import { useState } from "react";
import Button from "./assets/components/Button";
import Alert from "./assets/components/Alert";

import "./App.css";

const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  const [alertVisible, setAlertvisibile] = useState(false);

  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
    // {/* <Alert message="Your items has been added successfully" type="success" /> */}
    // {/* {alertVisible && (
    //   <Alert type="success" onClose={() => setAlertvisibile(false)}>
    //     <span className="fw-bold">Congratulation! </span>Your items has been
    //     added successfully
    //   </Alert>
    // )} */}

    // {/* <Button color="info" onCLick={() => setAlertvisibile(true)}>
    //   Hello Man
    // </Button> */}
  );
}

export default App;
