import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
        <AboutUs />
      </main>
    </>
  );
}

export default App;
