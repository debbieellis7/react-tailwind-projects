import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Popular from "./components/Popular";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <AboutUs />
        <Popular />
        <Review />
      </main>
      <Footer />
    </>
  );
}

export default App;
