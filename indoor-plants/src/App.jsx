import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import "remixicon/fonts/remixicon.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Services />
      </main>
    </>
  );
}

export default App;
