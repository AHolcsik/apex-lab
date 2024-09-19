import Monitor from "./components/Monitor";
import Alerts from "./components/Alerts";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigation />
      <Monitor />
      <Alerts />
    </>
  );
}

export default App;
