import { useState } from "react";
import InitialComponent from "./Components/InitialGlobe";
import StarsBackground from "./Components/StarBackground";
import MainPage from "./Pages/MainPage";
import ProjectTwo from "./Pages/ProjectTwo";

const App = () => {
  const [start, setStart] = useState<boolean>(true);
  return (
    <div>
      {/* {!start && <InitialComponent setStart={setStart} />} */}
      {/* {start && <StarsBackground />} */}
      {true && <StarsBackground />}
      {/* <MainPage /> */}
      <ProjectTwo start={start}/>
    </div>
  );
};

export default App;
