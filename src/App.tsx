import Brands from "./components/Brands";
import Category  from "./components/Category";
import Destinations  from "./components/Destinations";
import Footer from "./components/Footer";
import Home  from "./components/home";
import  NavBar  from "./components/nav";
import Steps from "./components/Steps";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";


function App() {
  return (
    <>
      <div className="app">
          <NavBar></NavBar>
          <Home></Home>
          <Category></Category>
          <Destinations></Destinations>
          <Steps></Steps>
          <Testimonials></Testimonials>
          <Brands></Brands>
          <Subscribe></Subscribe>
          <Footer></Footer>
      </div>
    </>
  );
}

export default App;
