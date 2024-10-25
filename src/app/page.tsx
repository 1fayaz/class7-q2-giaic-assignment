import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Aboutme from "./components/aboutme/Aboutme";


function page(){
  return(
    <div>
      <Header></Header>
      <Aboutme></Aboutme>


      <Hero></Hero>
      <Projects></Projects>
      


      <Footer></Footer>
    </div>
  )
}

export default page;