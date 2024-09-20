import Monitor from "./components/Monitor";
import Alerts from "./components/Alerts";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import useSocket from "./components/useSocket";

function App() {
  useSocket();
  return (
    <>
      <Navigation />
      <Monitor />
      <Alerts />
    </>
  );
}

export default App;
