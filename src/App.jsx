import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [switchState, setSwitchState] = useState(false);
  const [streamData, setStreamData] = useState();

  const useSocket = () => {
    useEffect(() => {
      const socket = new WebSocket(
        `wss://streamer.cryptocompare.com/v2?api_key=${process.env.REACT_APP_API_KEY}`
      );

      if (switchState) {
        socket.onopen = function onStreamOpen() {
          socket.send(
            JSON.stringify({ action: "SubAdd", subs: ["8~Binance~BTC~USDT"] })
          );
        };

        socket.onmessage = function onStreamMessage(event) {
          console.log("Message from server " + event.data);
          if (event.data.P < 50000) {
            event.data.flag = "D0E2F4";
          } else if (event.data.Q > 10) {
            event.data.flag = "FFF2CC";
          } else if (event.data.Q * event.data.P > 1000000) {
            event.data.flag = "EAD1DC";
          }
          setStreamData(event.data);
          console.log(streamData);
        };
      } else if (socket.readyState == WebSocket.OPEN) {
        socket.close();
      }
    }, [switchState]);
  };

  const toggleSwitch = () => {
    setSwitchState((prevState) => !prevState);
  };

  useSocket();

  return (
    <>
      <Navigation toggleSwitch={toggleSwitch} />
    </>
  );
}

export default App;
