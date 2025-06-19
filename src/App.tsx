import { useState } from "react";
import InitialComponent from "./components/InitialGlobe";
import StarsBackground from "./components/StarBackground";
import MainPage from "./Pages/mainPage";


const App = () => {
  const [start, setStart] = useState<boolean>(false);
  return (
    <div>
      {!start && <InitialComponent setStart={setStart} />}
      {start && <StarsBackground />}
      {/* {true && <StarsBackground />} */}
      {/* <MainPage /> */}
      <MainPage start={start}/>
    </div>
  );
};

export default App;
