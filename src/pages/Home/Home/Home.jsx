import { Fade } from "react-awesome-reveal";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Fade><Education></Education></Fade>
    </div>
  );
};

export default Home;
