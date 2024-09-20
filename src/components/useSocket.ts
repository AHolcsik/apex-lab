import { useEffect } from "react";

const useSocket = () => {
  useEffect(() => {
    // const socket = new WebSocket(
    //   `wss://streamer.cryptocompare.com/v2?api_key=${process.env.REACT_APP_API_KEY}`
    // );
    // // Connection opened
    // socket.addEventListener("open", () => {
    //   socket.send(
    //     JSON.stringify({ action: "SubAdd", subs: ["8~Binance~BTC~USDT"] })
    //   );
    // });
    // // Listen for messages
    // socket.addEventListener("message", (event) => {
    //   console.log("Message from server ", event.data);
    // });
  }, []);
};

export default useSocket;
