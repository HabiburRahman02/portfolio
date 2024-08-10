import { Fade } from "react-awesome-reveal";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
  return (
    <div className="">
      <Fade> <Banner></Banner></Fade>
      <Fade direction="left"><AboutMe></AboutMe></Fade>
      <Fade><Skills></Skills></Fade>
      <Fade direction="left"><Projects></Projects></Fade>
      <Fade><Education></Education></Fade>
      <Footer></Footer>
    </div>
  );
};

export default Home;
